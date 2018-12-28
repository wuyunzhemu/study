import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Head extends Component{
  static contextTypes = {
    store:PropTypes.object
  }
  constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount = () => {
    this._upState();
  }
  _upState(){
    const {store} = this.context;
    this.setState({
      ...store
    })
  }
  render(){
    return(
      <div className="head">{this.state.head}</div>
    )
  }
}