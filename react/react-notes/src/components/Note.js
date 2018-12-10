import React,{Component} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import _ from 'lodash';
import Editor from './Editor';
import {db,loadCollection} from '../database'
moment.locale('zh-CN');


// Note? 展示单条笔记，状态
class Note extends Component {
  constructor(props){
    super(props);
  }
  state = {
    entity:this.props.entity,
    body:this.props.entity.body,
    update:this.props.entity.meta.updated || this.props.entity.meta.created,
    open:false,
    destroyEntity:this.props.destroyEntity
  }
  updated(){
    return moment(this.state.update)
      .fromNow()
  }
  header(){
    return _.truncate(this.state.body,{length:30})||'新建笔记'
  }
  toggle = ()=>{
    this.setState((prevState)=>{
      return{
        open:!prevState.open
      }
    })
  }
  words(){
    return this.state.body.length;
  }
  render(){
    return(
      <div className="item">
        <div className="meta">
          {this.updated()}
        </div>
        <div className="content">
          <div className="header" onClick ={this.toggle}>
            {this.header()}
          </div>
          <div className="extra">
            {
              this.state.open && 
              <Editor entity = {this.state.entity} 
              updateEntity = {this.updateEntity} desdtroyEntity={this.destroyEntity}/>
            }
            {this.words()}字
            {
              this.state.open && 
              <i className="right floated trash outline icon" onClick={()=>this.state.destroyEntity(this.state.entity)}></i>
            }
          </div>
        </div>
      </div>
    );
  }
  updateEntity = (event) =>{
    const _body  = event.target.value
    this.setState({
      body:_body
    })
    loadCollection('notes')
      .then((collection)=>{
        const entity = this.state.entity
        entity.body = _body
        collection.update(entity)
        db.saveDatabase();
      })
  }



 
}
export default Note;