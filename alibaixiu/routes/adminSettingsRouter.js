// 引入express模块
const express = require('express');
// 创建路由
const adminSettingsRouter = express.Router();
// 引入控制器方法

// 创建具体路由
adminSettingsRouter.get('/settings', (req, res) => {
  res.render('./admin/settings');
})
// 导出路由
module.exports = adminSettingsRouter;