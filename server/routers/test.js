const mongoose = require('mongoose');
const router = require('koa-router')();
const url = require('../utils/url');

mongoose.connect(url);

const tests = mongoose.model('tests', mongoose.Schema({
    name: String
}));

let oTest = new tests({
    name:'huangxiaoya',
});

oTest.save();

router.get('/getTest', async function (ctx, next) {
    // 使用mongose
    const result = await tests.find({}, { _id: 0 });
    const data = result[0].name;
    ctx.response.body = {
        data
    };
    if(next){
        await next;
    }
});

module.exports = router;

/**
 * 1.引包mongoose
 * 2.连接
 * 3.建模 建类
 * 4.路由+后台逻辑(记得导出)
 */