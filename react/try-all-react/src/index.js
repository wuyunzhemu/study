import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class HelloUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'tylermcginnis'
    }
    // setTimeout(()=>{
    //   this.setState({
    //     username:'嘉欣'
    //   })
    // },2000)
  }
  render(){
    this.handleChange = this.handleChange.bind(this);
    return (
      <div>
        Hello  {this.state.username}
        <input 
          type = "text"
          value = {this.state.username}
          onChange = {(e)=>{this.handleChange(e)}}
        />
      </div>

      // <div>Hello World!</div>
      // React.createElement('div',null,React.createElement('p',null,'axiba'))
    )
  }
  handleChange(e){
    this.setState({
      username : e.target.value
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
