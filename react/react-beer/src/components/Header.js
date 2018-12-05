import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
class Header extends Component {
  static propTypes = {
    siteName:PropTypes.string
  }
   render (){
     return(
       <h1>
         {/* a将被完全接管， */}
         <Link to="/">{this.props.siteName}</Link>
         <Link to="/beer">详情页</Link>
       </h1>
     )
   }
}
export default Header;