import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
export default class ListEmployeeComponent extends Component {
   constructor(props){
       super(props)
       this.state={
           employees:[]
       }  
    this.addEmployee=this.addEmployee.bind(this);
    this.editEmployee=this.editEmployee.bind(this);
    this.viewEmployee=this.viewEmployee.bind(this);
    this.deleteEmployee=this.deleteEmployee.bind(this);
    }
     editEmployee(id){
       this.props.history.push(`/update-employee/${id}`)
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`)
     }
    deleteEmployee(id){
       EmployeeService.deleteEmployeeById(id);
       this.props.history.push('/employee');
     }
   componentDidMount()
       {
           EmployeeService.getEmployees().then((res)=>
           {
               this.setState({ employees: res.data});
           });
       }
    addEmployee(){
        this.props.history.push('/add-employee');
    }
   
    render() {
        return (
            <div>
                <h2 className="tect-center">Employees Management</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                         <td>
                                             <button  onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                             <button  onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                             <button  onClick={()=>this.viewEmployee(employee.id)} className="btn btn-danger">View</button>
                                         </td>
                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


