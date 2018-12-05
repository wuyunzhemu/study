军队危急时接管城市
应用知识页面?当然要路由,路由接管一切。
按照url 分发组件(Page级别组件) 
根路由APP 
  ->path '/' 页面A级别组件(Page)->容器组件Container -> 函数式组件(Present)
  ->path '/about/ 页面B级别组件(Page)->容器组件Container -> 函数式组件(Present)

- Link
 a 太弱了,所以react-router 给了我们Link组件
 to href params ... 满足单页应用需要的一切

- h5 history api 更新url,页面不用刷新
  -ref react 里的id 利用它找到JSX的片段
  Recat.createRef() 返回一个不重复的id 
  this.searchRef.current

- context 最后一大佬 component lifecycle state,事件 函数式组件
  this.context.router.history.push('/search/:')