- redux 让所有的状态共享，可以读，但是写要遵守规则，这也是redux的基本规则，只有action可以修改state(执行reducer)，
组件只能dispatch一个action

- reducer 是闺房 不可以直接调用的，
action才可以,
  组件 帅哥  不能直接见面dispatch  reducer 闺房小姐
  要保护好数据 设置了reducer 提供并且精确计算状态的函数，组件只有dispatch 一个action 才能执行reducer