redux 解决父子组件、兄弟组件传值麻烦的问题 
context 按组件传值 新的希望 react-redux 基于它实现 

全局状态
打破层级关系，实现共享
redux ? context

- context API redux 依靠它
  childContextTypes = {
    sotre:PropTypes.object
  }
  getChildContext(){
    return {store:{}}
  }