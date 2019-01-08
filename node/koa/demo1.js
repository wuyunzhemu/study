const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const fs = require('fs');
var router = new Router();

// ctx 上下文环境 
const about = ctx => {
  // ctx.response.body = 'Hello World';
  // ctx.response.type = 'html';
  // ctx.response.body = fs.createReadStream('./template.html')
  // web server 支持html格式返回 路由
  // if (ctx.request.path !== '/'){
  //   ctx.response.type = 'html';
  //   ctx.response.body = '<a href="/">Index Page</a>'
  ctx.response.type='html';
  ctx.response.body = '<a href="/">Index Page</a>'
}


router
  .get('/',(ctx)=>{
    ctx.response.body = 'Hello World'
  })
  .get('/about',about)
// template.html View层   main Control层

app.use(router.routes())
  .use(router.allowedMethods())
app.listen(3000);