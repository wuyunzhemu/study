- 标准redux脉络结构
constants(字符串匹配变量，标签化管理actionType)export const ADD = 'ADD') ->
reducer(初始化数据，执行方法)->store( const store = createStore(rootReducer);)得到所有状态->App.js(<Provider store={store}>)得到状态树->
  组件(export default connect(组件树要拿的state,dispatch(action))(组件名) 组件import action(打包给dispatch)
  ->reducer(switch(action.type)执行)  

- 发布订阅者
  组件connect(state,action)() 成为一个高阶组件
  action 是修改状态的唯一方式，靠触发reducer函数的执行