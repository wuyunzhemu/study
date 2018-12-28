import React,{Component} from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
// 在组件中static 一定要给他传参
import PropTypes from 'prop-types';

export default class App extends Component{
  // 这个属性里的值,在内部 打破层次,拿到在顶级组件中共享 的状态
  static childContextTypes = {
    store:PropTypes.Object
  }
  getChildContext(){
    const state = {
      head:'我是全局 head',
      body:'我是全局 body',
      headBtn:'修改 head',
      bodyBtn:' 修改 body'
    }
    return {store:state}
  }
  render(){
    return(
      <div className="App">
        <Head/>
        <Body/>
      </div>
    )
  }
}