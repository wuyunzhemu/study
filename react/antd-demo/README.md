

2. 路由接管一切，配置在最前面
  <Router>
    <Router path="" component=""/>
  </Router>
  有两种路由 
    1. BrowserRouter(高级浏览器 mobile，URL更好理解)  2.HashRouter(兼容性更好，支持IE8以上的所有浏览器)
    history.pushState(state:JSON,title,url)