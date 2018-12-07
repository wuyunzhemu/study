import React,{Component} from 'react';
import Beer from './Beer';
import Detail from './Detail'
export default class Results extends Component {
  render(){
    return(
      <div className="results">
        <div className="beers">
          {this.props.beers.map((beer,i) => <Detail beer={beer} key={i}/>)}
        </div>
      </div>
    )
  }
}