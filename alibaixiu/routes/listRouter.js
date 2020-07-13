// 导入express模块
const express = require('express')

// 创建路由
const listRouter = express.Router()

// 引入控制器方法


// 创建具体路由
listRouter.get('/',(req,res)=>{
    // res.send('列表')
    res.render('list')
})

// 导出路由
module.exports = listRouter;