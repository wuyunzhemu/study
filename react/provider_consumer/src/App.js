import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { filmAction} from './actions';
// redux 负责解决films api action
// action 应该由组件来触发

class App extends Component {
  componentDidMount(){
    console.log('mount')
    this.props.getFilmData();
  }
  render(){

    return(
      <div>
        <ul>
          {
            this.props.films.map((film,index)=>{
              return <li key={index}>
                <h2>{film.name}</h2>
                <img src ={film.poster} alt={film.name}/>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    films:state.films
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmData:()=>{
      // dispatch((dispatch)=>{
        dispatch(filmAction)
      // });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);