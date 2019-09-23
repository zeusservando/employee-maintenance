import React, {Component} from 'react'
// import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
// import Create from './create-component';
import Edit from './edit-component';

class Employees extends Component {

	constructor(props){
		super(props);

		this.state={
			firstname:'',
			lastname:'',
			birthdate:'',
			contact:'',
			email:'',
			balance:'',
			empId:'',
			employeeList:[
				{id:1,firstname:'Lyndon',lastname:'Tan','birthdate':'Dec 21 1991', 'contact':123456789,'email':'lyndontnamail@gmail.com','balance':0},
				{id:2,firstname:'Zeus',lastname:'Tan','birthdate':'Dec 21 1991', 'contact':123456789,'email':'lyndontnamail@gmail.com','balance':0}
			],
			isEdit:false
		}
		this.onUpdateFirstname = this.onUpdateFirstname.bind(this);
		this.onUpdateLastName = this.onUpdateLastName.bind(this);
		this.onUpdateBirthDate = this.onUpdateBirthDate.bind(this);
		this.onUpdateContact = this.onUpdateContact.bind(this);
		this.onUpdateEmail = this.onUpdateEmail.bind(this);
		this.onUpdateBalance = this.onUpdateBalance.bind(this);
	}

	onUpdateFirstname(e){
		this.setState({firstname:e.target.value})
	}

	onUpdateLastName(e){
		this.setState({lastname:e.target.value})
	}

	onUpdateBirthDate(e){
		this.setState({birthdate:e.target.value})
	}
	onUpdateContact(e){
		this.setState({contact:e.target.value})
	}
	onUpdateEmail(e){
		this.setState({email:e.target.value})
	}
	onUpdateBalance(e){
		this.setState({balance:e.target.value})
	}

	onEditEmployee=(index, e)=>{
		const employeesCopy=[...this.state.employeeList];
		let getCurrentEmp = [employeesCopy[--index]];
		console.log(getCurrentEmp);
		this.setState({
			empId:index,
			isEdit:true,
			employeeList:getCurrentEmp
		});		
	}

	onSaveEdit =(index, e) =>{
		const empCopy = [...this.state.employeeList];
		let empId = this.state.empId;
		let firstname = this.state.firstname;
		let lastname = this.state.lastname;
		let birthdate = this.state.birthdate;
		let contact = this.state.contact;
		let email = this.state.email;
		let balance = this.state.balance;
		let empDetails;
		this.setState({
			firstname: firstname,
			lastname: lastname,
			birthdate:birthdate,
			contact: contact,
			email: email,
			balance:balance
		});

		empDetails=[firstname,lastname,birthdate,contact,email,balance];
		empCopy[empId]=empDetails
		this.setState({
			employeeList:empCopy
		});

		console.log(empCopy);
	}


	onCancelEdit=()=>{
		this.setState({
			isEdit:false,
			employeeList:this.state.employeeList
		});	
	}
	render() {
		return(
			<div>
					{ !this.state.isEdit ?
					<table  className="table table-condensed">
						<tbody>
							<tr>
								<th>ID</th>
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
									<td>{++key}</td>
									<td>{value.firstname}</td>
									<td>{value.lastname}</td>
									<td>{value.birthdate}</td>
									<td>{value.contact}</td>
									<td>{value.email}</td>
									<td>{value.balance}</td>
									<td><button className="btn btn-info" onClick={this.onEditEmployee.bind(this,key)}>Edit</button></td>
									<td><button className="btn btn-success">Add pay</button></td>
								</tr>
							)}							
						</tbody>
					</table>: <Edit
						empId={this.state.empId} 
						employeeList={this.state.employeeList} 
						cancelEdit={this.onCancelEdit}
						SaveEdit={this.onSaveEdit}
						onEditFirstname={this.onUpdateFirstname}
						onEditLastname={this.onUpdateLastName}
						onEditBirthdate={this.onUpdateBirthdate}
						onEditContact={this.onUpdateContact}
						onEditEmail={this.onUpdateEmail}
						onEditBalance={this.onUpdateBalance}
						/> 
					}
				</div>
			);
	}
}
export default Employees;