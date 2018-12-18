import React,{Component} from 'react';
import './modal.css';

class Modal extends Component {
  constructor(props){
    super(props)
    this.state={
      visible:true
    }
  }
  render(){
    const {visible} = this.state;
    const {title,children} = this.props;
      return visible && <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">
            {title}
          </div>
          <div className="modal-content">
            {children}
          </div>
          <div className="modal-operator">
            <button onClick={this.closeModal} className='modal-operator-close'>取消</button>
            <button onClick={this.confirm} className='modal-operator-confirm'>确认</button>
          </div>
        </div>
        <div className="mask" onClick={this.maskClick}></div>
      </div>
  }
  maskClick=()=>{
    console.log('点击了蒙层')
    this.setState({
      visible:false
    })
  }

  closeModal=()=>{
    console.log('点击了取消')
    const {onClose} = this.props
    onClose && onClose();
    this.setState({
      visible:false
    })
  }

  confirm=()=>{
    const {confirm} = this.props
    confirm && confirm();
    console.log('点击了确定')
    this.setState({
      visible:false
    })
  }

  componentWillReceiveProps(props){
    this.setState({
      visible:props.visible
    })
  }

  componentDidMount(){
    this.setState({
      visible:this.props.visible
    })
  }

}

export default Modal;