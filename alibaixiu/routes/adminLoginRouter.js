// 引入express模块
const express = require('express');
// 创建路由
const adminLoginRouter = express.Router();
// 引入控制器方法

// 创建具体路由
adminLoginRouter.get('/login', (req, res) => {
  res.render('./admin/login');
})
// 导出路由
module.exports = adminLoginRouter;