
const express = require('express');
const bodyParser = require('body-parser');// 解析前端传过来的数据的中间件
const cookidParser = require('cookie-parser');
const app = express();
const request = require('request');
const log = require('../log');
const settings = require('../settings');

const requireContext = require('require-context')
const path = require('path')

const context = requireContext(path.join(__dirname, './modules'), false, /\.js$/)
const APIS = context.keys().reduce((APIS, modulePath) => {
  APIS = APIS.concat(context(modulePath))
  return APIS
}, [])
console.log(APIS)

const jsonParser = bodyParser.json();// JSON解析器，根据具体传输的数据格式选择
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const globalToken = {};
const casServer = 'http://' + settings.cas.host + ':' + settings.cas.port;
const frontOrigin = 'http://' + settings.front.host + ':' + settings.front.port;

app.use(cookidParser());
app.use(express.static('dist'));
app.use(jsonParser);
app.use(urlencodedParser);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', frontOrigin);
  res.header('Access-Control-Allow-Methods', 'HEAD, POST, GET, OPTIONS, DELETE, PUT, CONNECT, TRACE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Cache-Control', 'no-store')
  next();
});

APIS.forEach((item) => {
  log(`[${item.name}]:${item.url}`);
  const url = item.url;
  const method = new String(item.type).toLowerCase()
  const response = item.response
  app[method](url, (req, res) => {
    res.send(response(req, res));
  })
});

app.get('/', function (req, res) {
  res.send('欢迎使用本地server模拟服务!!!');
});

app.get('/permitThrough', function (req, res) {
  res.send({ 'statusCode': 0, 'statusText': '重定向到CAS服务器进行验证', 'data': false });
});
app.get('/checkFrontSso', function (req, res) {
  const token = req.cookies.token;
  log('globalToken:' + JSON.stringify(globalToken) + '\n');
  if (globalToken[token]) {
    log(`token检测通过 token:${globalToken[token]}`);
    res.send({ 'statusCode': 0, 'statusText': '检测成功', 'data': true });
  } else {
    log(`token检测不通过,请跳转到cas登陆 token:${token}`);
    res.send({ 'httpCode': 302, 'statusText': '重定向到CAS服务器进行验证', 'data': { 'sso_redirect_url': 'http://' + settings.cas.host + ':' + settings.cas.port + '/cas/retrieveToken?appId=back-server-sso' } });
  }
});

app.get('/sso', function (req, res) {
  const token = req.query.token
  log(`后端收到前端登陆请求，token:${token},前往cas校验token`);
  request({
    url: `${casServer}/verify?token=${token}`,
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      log(`cas校验通过:${JSON.stringify(body)}`);
      globalToken[token] = body;
      const frontAddr = req.query.backurl;
      res.cookie('token', token, { frontOrigin });
      log(`后端注册登陆状态:${token} 重定向回前端`);
      res.redirect(frontAddr);
    } else {
      res.status(404).send({ data: 'token校验失败' });
    }
  });
});

app.get('/logout', function (req, res) {
  const token = req.query.token;
  log(`server签退,token:${token}`);
  globalToken[token] = undefined;
  log('globalToken:' + JSON.stringify(globalToken) + '\n');
  res.cookie('token', token, { maxAge: 0, frontOrigin });
  res.send({ 'statusCode': 0, 'statusText': '签退成功', 'data': { casAddr: 'http://' + settings.cas.host + ':' + settings.cas.port + '/cas/retrieveToken?appId=back-server-sso' } });
});

app.listen(settings.server.port, settings.server.host, (data) => {
  console.log('创建服务成功，监听端口：' + settings.server.port);
});
