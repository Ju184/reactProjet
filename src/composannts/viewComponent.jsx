import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class viewComponent extends Component {

    constructor(props){
        super(props);

        this.state={

            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:''
        }
    }
    componentDidMount()
    {
    
     EmployeeService.getEmployeeById(this.state.id).then((res)=>
     {
        let employee=res.data;
        this.setState({firstName:employee.firstName,
            lastName:employee.lastName,
             emailId:employee.emailId
        })
     })
    }
    render()
     {
        return (
            <div>
                <ul  >
                    <li> firstname = {this.state.firstName} </li>
                    <li> lastName = {this.state.lastName} </li>
                    <li> emailId = {this.state.emailId} </li>
                </ul>
                
            </div>
        )
    }
}