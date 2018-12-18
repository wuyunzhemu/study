import React, { Component } from 'react';
import Modal from './modal/modal'
import './App.css';

class App extends Component {
  state = {
    visible:false
  }
  showModal = ()=>{
    this.setState({
      visible:true
    })
  }
  render() {
    const {visible} = this.state;
    console.log(visible)
    return (
      <div className="App">
        <button onClick={this.showModal}>click here</button>
        <Modal
          title="这是自定义标题"
         visible={visible}
         onClose = {this.closeModal}
         confirm = {this.confirm}>
         这是自定义的content
        </Modal>
      </div>
    );
  }
  closeModal=() =>{
    console.log('通知父组件点击取消')
  }
  confirm =()=>{
    console.log('通知父组件点击确定')
  }
}

export default App;
