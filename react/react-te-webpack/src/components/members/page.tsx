import * as React from 'react';
import { MemberEntity } from '../../model/memberEntity';
import { memberAPI } from '../../api/member/index';
import { render } from 'react-dom';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';
import {Link} from 'react-router-dom';




interface State{
    members:MemberEntity[]
}
interface Props{

}
// 没有用到state
export class MembersPage extends React.Component<Props,State>{
    constructor(props){
    super(props);
    this.state = {
        members:[]
      }
    }
    public componentDidMount(){
        memberAPI.fetchMembersAsync()
            .then(members =>{
                this.setState({
                    members 
                })
            });
    }
    
  public render(){
    return(
        <div className="row">
            <h2>Members Page</h2>
            <Link className="nav-link" to="/MemberPageContainer">New Member </Link>
            <table className="table">
                <thead>
                  <MemberHeader/>
                </thead>
                <tbody>
                  {this.state.members.map((member)=>(
                    <MemberRow key={member.id} member={member} />
                  ))}
                </tbody>
            </table>
        </div>
    )
  }

}
