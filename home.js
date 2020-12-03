
}const koa = require('koa')
const app = new koa()
const router = require('koa-router')
const app1 = new router() // 路由
const bodyparser = require('koa-bodyparser')
// const mysql = require('mysql')
app.use(bodyparser())
app.use(app1.routes())

// const conn = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '123',
//     database : 'test'
//   })


// home中的数据
const data = require('./home.json') // 获取数据
console.log(data);

app.listen(3000, () => {
    console.log(11111111);
})
// swiperList路由
app1.get('/swiper/list', (ctx) => { // 定义接口名
    // console.log(2222222222);
    // console.log( ctx.request.query.id);
    const data1 = data.swiperList // 数据处理
    ctx.body = data1 // 传出的body
})

// app1.get('/swiper/list', async (ctx) => { // 定义接口名
//     let sql = 'select * from tt'
//     const result = await sqlQuery(sql)
//     // const data1 = data.swiperList // 数据处理
//     ctx.body = result // 传出的body
// })

// async function sqlQuery (sql) {
//     return new Promise((resolve, rejects) => {
//         conn.query(sql, (err, data) => {
//             if (err) rejects(err)
//             resolve(data)
//         })
//     })
// }
    

// liveList路由
app1.get('/liveList/list', (ctx) => { // 定义接口名
    console.log(2222222222);
    console.log( ctx.request.query.id);
    const data1 = data.liveList // 数据处理
    ctx.body = data1 // 传出的body
})
// articleList文章列表
app1.get('/articleList/list', (ctx) => { // 定义接口名
    console.log(2222222222);
    console.log( ctx.request.query.id);
    const data1 = data.articleList // 数据处理
    ctx.body = data1 // 传出的body
})




// find中的数据
const findData = require('./find.json')
console.log(findData);
// 发现中疾病列表
app1.get('/diseaseName/list', (ctx) => {
    const data1 = findData.diseaseName
    ctx.body = data1
})
// 发现中文章列表
app1.get('/diseaseArticle/list', (ctx) => {
    const data1 = findData.diseaseArticle
    ctx.body = data1
})


// 今日学习目标中的数据
const subjectData = require('./study.json')
const { resolve } = require('path')
const { rejects } = require('assert')
console.log(subjectData);
// 医学科目列表
app1.get('/medicineSubject/list', (ctx) => {
    const data1 = subjectData.medicineSubject
    ctx.body = data1
})
// 学习时间列表
app1.get('/readTime/list', (ctx) => {
    const data1 = subjectData.readTime
    ctx.body = data1
})

