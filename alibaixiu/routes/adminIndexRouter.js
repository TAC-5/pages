// 引入express模块
const express = require('express');
// 创建路由
const adminIndexRouter = express.Router();
// 引入控制器方法

// 创建具体路由
adminIndexRouter.get('/', (req, res) => {
  res.render('./admin/index');
})
// 导出路由
module.exports = adminIndexRouter;