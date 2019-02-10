const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const staticServer = require('koa-static');
const router = require('koa-router')();
const fs = require('fs');
const test = require('./server/routers/test');

const app = new koa();

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./views/index.html');
};
router.get('*', main);

app.use(test.routes());
app.use(bodyParser());
app.use(staticServer(__dirname + '/dist'));

app.use(router.routes());
app.listen(3000);

/**
 * 1.new koa() listen
 * 2.bodyparser static(dist)
 * 3.router(fs读取 view index.html文件)
 * 4.去写数据库部分(server文件夹)
 * 5.载入数据库部分的路由
 */