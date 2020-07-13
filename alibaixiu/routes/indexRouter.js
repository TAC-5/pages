// 导入express模块
const express = require('express')

// 创建路由
const indexRouter = express.Router()

// 引入控制器方法


// 创建具体路由
indexRouter.get('/',(req,res)=>{
    res.render('index')
})

// 导出路由
module.exports = indexRouter;