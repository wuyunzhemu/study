import React,{Component} from 'react';
class Form extends Component{
  constructor(){
    super();
    this.initialState ={
      name:"",
      job:""
    };
    this.state = this.initialState;
  }
  
  render(){
    const {name,job} = this.state;
    return (
      <form>
        <div className = "form-field">
          <label>Name</label>
            <input className="form-control" value={name} name="name" onChange = {this.handleChange}  type="text"/>
        </div>
        <div className = "form-field">
          <label >job</label>
          <input className="form-control" value={job} name="job" onChange = {this.handleChange} type="text"/>
        </div>
        <div className="form-field">
          <input type="button" value="Submit" className="btn btn-primary" onClick={()=>{this.submitForm()}}/>
        </div> 
      </form>
    );
  }

  submitForm = () =>{
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }
  handleChange = event =>{
    const {name,value} = event.target;
    console.log(name,value);
    this.setState({
      [name]:value
    });
  }
}


export default Form;