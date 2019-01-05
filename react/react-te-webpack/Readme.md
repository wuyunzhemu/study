- 
--hot 选项 为热更新<局部更新>
    当状态改变时，只更新一部分。
--open 自动打开浏览器

- 
tsconfig.json typescript
webpack.config.js 工作流
    entry src/index.ts 有多个入口 给打包后的文件命名 
    {
        app: ,
        vendorStyle: 
    }
    为何要有多个？ 打包要时间， bootstrap 样式绝对不会改变，没必要每次都打包
    css lib ，react react-router-dom redux 没必要一次性打包。
    打包出来 index.html 引入了两个文件 http请求数增加了，但是加的不多，对于现代浏览器(尤其chrome) 同时并发少数的http对性能没有影响。但是反面有优势，静态资源是会缓存的，lib css js 不需要下载，而业务组件开发的src components js 会经常修改 ，分开打包，只会让用户更新这一小部分js ，打开页面会更快。
    不会改变的lib部分 会放到cdn（加速访问网络）去

    webpack-dev-server port
    html-pligin src/index.html template
babel js编译

- typescript 在react 中做加法，让项目强类型化，减少错误，
    1.  members：MemberEntity[]
        生命周期之中请求，api 方法 返回值类型
        interface MemberEntity
    2.  model 层
    2.  api 层 

common input,button
form => page (redux state) =>pageContainer

- api
 用来数据请求