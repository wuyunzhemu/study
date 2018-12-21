- 代码结构
  store
    状态仓库，状态多，难管理。
   共享状态 getState setState
- 组建通信
  api

统一状态树 Store 唯一
1. store.getState() 读
2. store.dispatch({type:'INCREMENT'}) 相应的reducer 得以计算 返回新的状态
  MVVM 更新 UI