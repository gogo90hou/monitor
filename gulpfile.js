const log = require('./mock/log');
const { exec, spawn } = require('child_process');
const { series, parallel  } = require('gulp');

function build() {
  return new Promise((resolve, reject) => {
    exec('npm run build:prod', (error, stdout, stderr) => {
      log(`npm run build:prod. run over! error:${error}`);
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    })
  });
}

function install() {
  return new Promise((resolve, reject) => {
    exec('npm install', (error, stdout, stderr) => {
      log(`npm install. run over! error:${error}`);
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function rundev() {
  return new Promise((resolve, reject) => {
    const grep = spawn('npm.cmd', [ 'run', 'dev']);
    grep.stdout.on('data', (data) => {
      console.log(data.toString());
    });
    
    grep.stderr.on('data', (data) => {
      console.error(`grep stderr: ${data}`);
    });
    
    grep.on('close', (code) => {
      if (code !== 0) {
        console.log(`grep 进程退出，退出码 ${code}`);
      }
    });
  });
}

function runcas() {
  return new Promise((resolve, reject) => {
    exec('node mock/cas', (error, stdout, stderr) => {
      log(`node mock/cas. run over! error:${error}`);
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function runserver() {
  return new Promise((resolve, reject) => {
    exec('node mock/server', (error, stdout, stderr) => {
      log(`node mock/server. run over! error:${error}`);
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

exports.server = parallel(runcas, runserver);
exports.dev = rundev;
exports.build = build;
exports.default = series(install, build);
