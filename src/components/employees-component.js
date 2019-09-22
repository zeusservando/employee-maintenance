import React, {Component} from 'react'
// import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
// import Create from './create-component';
import Edit from './edit-component';

class Employees extends Component {

	constructor(props){
		super(props);

		this.state={
			employeeList:[],
			isEdit:false
		}
	}

	componentDidMount(){

		this.state.employeeList.push({firstname:'Lyndon',lastname:'Tan','birthdate':'Dec 21 1991', 'contact':123456789,'email':'lyndontnamail@gmail.com','balance':0})

		this.setState({
			employeeList:this.state.employeeList
		});
	}

	onEditEmployee=()=>{
		this.setState({
			isEdit:true
		});
	}

	onCancelEdit=()=>{
		this.setState({
			isEdit:false
		});	
	}

	onSaveEdit =() =>{
		console.log("SAVED!");
	}
	render() {
		console.log(this.state.isEdit);
		return(
			<div>
					{ !this.state.isEdit ?
					<table  className="table table-condensed">
						<tbody>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Date of Birth</th>
								<th>Contact Number</th>
								<th>Email</th>
								<th>Balance</th>
								<th>Edit</th>
								<th>Add pay</th>
							</tr>
							{this.state.employeeList.map((value, key)=>
								<tr key={key}>
									<td>{value.firstname}</td>
									<td>{value.lastname}</td>
									<td>{value.birthdate}</td>
									<td>{value.contact}</td>
									<td>{value.email}</td>
									<td>{value.balance}</td>
									<td><button className="btn btn-info" onClick={this.onEditEmployee}>Edit</button></td>
									<td><button className="btn btn-success">Add pay</button></td>
								</tr>
							)}							
						</tbody>
					</table>: <Edit 
						employeeList={this.state.employeeList} 
						cancelEdit={this.onCancelEdit}
						SaveEdit={this.onSaveEdit}/> }
				</div>
			);
	}
}
export default Employees;