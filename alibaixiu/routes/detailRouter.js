// 导入express模块
const express = require('express')

// 创建路由
const detailRouter = express.Router()

// 引入控制器方法


// 创建具体路由
detailRouter.get('/',(req,res)=>{
    // res.send('首页')
    res.render('detail')
})

// 导出路由
module.exports = detailRouter;