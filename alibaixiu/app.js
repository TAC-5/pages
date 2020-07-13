// 导入包
    // 导入express包
const express = require('express');
    // 导入path模块
const path = require('path');
    // 导入ejs包
// const ejs = require('ejs');
    // 导入用户系统首页路由
const index = require('./routes/indexRouter');
    // 导入用户系统列表路由
const list = require('./routes/indexRouter');
    // 导入用户系统详情路由
const detail = require('./routes/detailRouter');
    // 导入后台系统登陆路由
const adminLogin = require('./routes/adminLoginRouter');
    // 导入后台系统首页路由
const adminIndex = require('./routes/adminIndexRouter');
    // 导入后台系统文章路由
const adminPosts = require('./routes/adminPostsRouter');
    // 导入后台系统评论路由
const adminComments = require('./routes/adminCommentsRouter');
    // 导入后台系统用户路由
const adminUsers = require('./routes/adminUsersRouter');
    // 导入后台系统设置路由
const adminSettings = require('./routes/adminSettingsRouter');



// 设置包
    // 创建服务器
const app = express();
    // 配置静态服务器
app.use(express.static(path.join(__dirname, 'public')));
    // 把views设置为模板文件目录
app.set('views',path.join(__dirname,'views'));
    //设置模板引擎伪ejs
app.set('view engine', 'ejs');
    // 为html扩展名注册ejs
// app.engine('html',ejs.renderFile)

// 挂载路由
    // 首页
app.use(index)
    // 列表
app.use(list)
    // 详情
app.use(detail)
    // 登录路由
app.use('/admin', adminLogin);
    // 首页路由
app.use('/admin', adminIndex);
    // 文章路由
app.use('/admin', adminPosts);
    // 评论路由
app.use('/admin', adminComments);
    // 用户路由
app.use('/admin', adminUsers);
    // 设置路由
app.use('/admin', adminSettings);

// 指定端口并启动服务
app.listen(3000,()=>{
    console.log('服务器启动成功，请打开:http://localhost:3000')
})