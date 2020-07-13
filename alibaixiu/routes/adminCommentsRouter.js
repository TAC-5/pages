// 导入express模块
const express = require('express')
// 创建路由
const adminCommentRouter = express.Router()
// 引入控制器方法


// 创建具体路由
adminCommentRouter.get('/comments',(req,res)=>{
    res.render('./admin/comments')
})
// 导出路由
module.exports = adminCommentRouter;