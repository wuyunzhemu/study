import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import enhanceComponent from './enhanceComponent.jsx'



var Content = (props)=><p>I am {props.name}</p>
var EnhancedContent = enhanceComponent(Content)
Content.PropTypes = {
  name:PropTypes.string
}

class App extends Component {
  render() {
    return (
      <EnhancedContent name="Contentcomponent"></EnhancedContent>
    );
  }


}

export default App;
