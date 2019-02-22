import React,{ Component } from 'react';
import './App.css';
import Index from '../../components/Index/Index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerAction} from '../../redux/action/users';


 class App extends Component{
  render(){
    return(
      <Index />
    )
  }
}

export default connect (
  (state) => {
    return{
      users:state.users
    }
  },
  (dispatch) =>{
    return{
      registerActions:bindActionCreators(registerAction,dispatch)
    }
  }
)(App);