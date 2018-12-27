import {state} from './redux/state.js'
import {storeChange} from './redux/storeChange.js'
import {createStore} from './redux/createStore.js'

const {store,dispatch} = createStore(state,storeChange);

renderApp(store);
dispatch({type:'BODY_TEXT',text:'我是调用dispatch修改的body'});
// console.log(store);
renderApp(store);
// 多(层次)组件共享状态


// 写 规则 何时写 如何写 dispatch 只是代号


  // 组件只使用自己的状态，不需要redux
function renderHead(state){
  const head = document.getElementById('head');
  head.innerText = state.head.text;
  head.style.color=state.head.color;
  // 隐患 其它组件state不该在不经过规范的情况下被修改，该按规矩办， action对状态写，所有组件都遵守的约定，通过type来规范写操作的行为
  // state.body.text = '我是经过head修改后的body'
  // dispatch(state,{type:'BODY_TEXT',text:'我是经过head修改后的body'})
}

function renderBody(state){
  const body = document.getElementById('body');
  body.innerText = state.body.text;
  body.style.color = state.body.color;
}

function renderApp(state){
  renderHead(state);
  renderBody(state);
}
