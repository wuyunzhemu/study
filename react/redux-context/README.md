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

  context 四步
  - ChildContextTypes 顶层组件中 规定类型
  - getChildContext 顶层组件中设置数据
  - 后代组件通过 contextTypes 规定数据类型
  - 后代组件this.context获取数据

  全局的store 代码重复，违反了dry dont repeat yourself  声明周期 _setUp() contextTypes
  connect react-redux HOC