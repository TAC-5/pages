// 引入express模块
const express = require('express');
// 创建路由
const adminUsersRouter = express.Router();
// 引入控制器方法

// 创建具体路由
adminUsersRouter.get('/users', (req, res) => {
  res.render('./admin/users');
})
// 导出路由
module.exports = adminUsersRouter;