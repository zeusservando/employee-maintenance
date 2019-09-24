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
			getCurrentEmp:[],
			employeeList:[],
			isEdit:false,
			success:false
		}
		this.onUpdateFirstname = this.onUpdateFirstname.bind(this);
		this.onUpdateLastName = this.onUpdateLastName.bind(this);
		this.onUpdateBirthDate = this.onUpdateBirthDate.bind(this);
		this.onUpdateContact = this.onUpdateContact.bind(this);
		this.onUpdateEmail = this.onUpdateEmail.bind(this);
		this.onUpdateBalance = this.onUpdateBalance.bind(this);
	}

	componentDidMount()
	{
		this.setState({employeeList:[
			  {
				'firstname':'foo',
				'lastname':'bar',
				'birthdate':'12-21-1991',
				'contact':'123456789',
				'email':'don@gmail.com',
				'balance':'0'
			 },
			 {
				'firstname':'Juan',
				'lastname':'DelaCruz',
				'birthdate':'12-21-1991',
				'contact':'123456789',
				'email':'don@gmail.com',
				'balance':'0'
			 },
		 ]})
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
		let employeesCopy=Object.assign({},this.state.employeeList);
		let getCurrentEmp = [employeesCopy[--index]];
		employeesCopy[++index]=getCurrentEmp;

		this.setState({
			empId:index,
			isEdit:true,
			getCurrentEmp:getCurrentEmp,
			employeeList:this.state.employeeList
		});
	}

	onSaveEdit =() =>{

		let empId 		= this.state.empId;
		let firstname 	= this.state.firstname;
		let lastname 	= this.state.lastname;
		let birthdate   = this.state.birthdate;
		let contact 	= this.state.contact;
		let email 		= this.state.email;
		let balance 	= this.state.balance;
		let employeesCopy = [...this.state.employeeList];
		let getCurrentEmp=employeesCopy[--empId];
		for (var i = 0; i < employeesCopy.length; i++) {
			employeesCopy[empId].firstname = firstname 	 === "" ? employeesCopy[empId].firstname : firstname;
			employeesCopy[empId].lastname = lastname 	 === "" ? employeesCopy[empId].lastname : lastname;
			employeesCopy[empId].birthdate = birthdate 	 === "" ? employeesCopy[empId].birthdate : birthdate;
			employeesCopy[empId].contact = contact 	 === "" ? employeesCopy[empId].contact : contact;
			employeesCopy[empId].email = email  	 === "" ? employeesCopy[empId].email : email;
			employeesCopy[empId].balance = balance 	 === "" ? employeesCopy[empId].balance : balance;
		}

		this.setState({
			firstname: firstname,
			lastname: lastname,
			birthdate:birthdate,
			contact: contact,
			email: email,
			balance:balance,
			isEdit:true,
			success:true,
			employeeList:employeesCopy
		});
			
		console.log("SAVED");
		
	}

	onReturn=()=>{
		console.log(this.state.employeeList);
		this.setState({
			isEdit:false,
			employeeList:this.state.employeeList
		});	
	}


	onDeleteEmployee=(index, e)=>{
		// const employeesCopy=['']
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
								<th>Delete</th>
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
									<td><button className="btn btn-danger" onClick={this.onDeleteEmployee.bind(this,key)} >Delete</button></td>
								</tr>
							)}							
						</tbody>
					</table>: <Edit
						employeeList={this.state.getCurrentEmp} 
						returnEdit={this.onReturn}
						SaveEdit={this.onSaveEdit.bind(this)}
						onEditFirstname={this.onUpdateFirstname}
						onEditLastname={this.onUpdateLastName}
						onEditBirthdate={this.onUpdateBirthdate}
						onEditContact={this.onUpdateContact}
						onEditEmail={this.onUpdateEmail}
						onEditBalance={this.onUpdateBalance}
						success={this.state.success}
						/> 
					}
				</div>
			);
	}
}
export default Employees;