// 引入express模块
const express = require('express');
// 创建路由
const adminPostsRouter = express.Router();
// 引入控制器方法

// 创建具体路由
adminPostsRouter.get('/posts', (req, res) => {
  res.render('./admin/posts');
})
// 导出路由
module.exports = adminPostsRouter;