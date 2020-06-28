
const express = require('express');
const bodyParser = require('body-parser');// 解析前端传过来的数据的中间件
const cookidParser = require('cookie-parser');
const path = require('path')
const app = express();
const request = require('request');
const log = require('../log');
const settings = require('../settings');

const jsonParser = bodyParser.json();// JSON解析器，根据具体传输的数据格式选择
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const globalToken = {};

app.use(cookidParser());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(express.static(path.join(__dirname, '/')));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Cache-Control', 'no-store')
  next();
});
const front = 'http://' + settings.front.host + ':' + settings.front.port;
const backServerOrigin = 'http://' + settings.server.host + ':' + settings.server.port;
const backServerCheckLogin = backServerOrigin + '/sso?sso_type=front';

app.get('/', function (req, res) {
  res.send('hello world!!!');
});

app.get('/cas/retrieveToken', function (req, res) {
  log('globalToken:' + JSON.stringify(globalToken) + '\n');
  const token = req.cookies.token;
  // if (globalToken[token]) {
  log(`cas检测已登录，token:${token} 重定向到后端`);
  res.redirect(backServerCheckLogin + '&token=' + token + '&backurl=http%3A%2F%2F' + settings.front.host + '%3A' + settings.front.port + '%2F%23%2F%3Fsso_type%3Dfront');
  // } else {
  //   log(`cas检测未登录，token:${token} 跳转到cas登陆页面`);
  //   res.redirect('/login.html')
  // }
});

app.get('/verify', function (req, res) {
  log('globalToken:' + JSON.stringify(globalToken) + '\n');
  const token = req.query.token;
  if (globalToken[token]) {
    res.send(globalToken[token]);
  } else {
    res.status(201).send({ data: 'token非法' });
  }
});

app.get('/login', function (req, res) {
  const token = Number(new Date());
  const obj = {
    name: req.query.user,
    pwd: req.query.pwd
  }
  globalToken[token] = obj;
  res.cookie('token', token);
  log(`cas登陆成功，token:${token} ${JSON.stringify(obj)}重定向回前端`);
  res.redirect(front + '/#/?sso_type=front');
});

app.get('/logout', function (req, res) {
  const token = req.cookies.token;
  log(`cas签退,token:${token}`);
  globalToken[token] = undefined;
  res.cookie('token', token, { maxAge: 0, httpOnly: true });
  request({
    url: backServerOrigin + `/logout?token=${token}`,
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      log(`cas签退成功，token:${token} 重定向到后端`);
      res.redirect('/login.html');
    }
  });
});

app.get('/V03R00C028B001/sw/hygieneService/get', function (req, res) {
  res.send({ body: req.body, query: req.query, params: req.params });
});

app.post('/V03R00C028B001/sw/hygieneService/post', function (req, res) {
  const file = req.file;
  res.send(file);
});

app.get('/V03R00C028B001/sw/hygieneService/users', function (req, res) {
  res.send({ body: req.body, query: req.query, params: req.params });
});
app.post('/V03R00C028B001/sw/hygieneService/users', function (req, res) {
  res.send({ body: req.body, query: req.query, params: req.params });
});

app.listen(settings.cas.port, settings.cas.host, (data) => {
  console.log('创建cas服务成功，监听端口：' + settings.cas.port);
});
