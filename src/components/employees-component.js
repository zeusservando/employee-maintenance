import React, {Component} from 'react'
import Create from './create-component';
import Edit from './edit-component';
import Search from './search-component';

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
			addNewEmp:false,
			isEdit:false,
			success:false,
			chckIfEmptyOrNot:false
		}
		this.onUpdateFirstname = this.onUpdateFirstname.bind(this);
		this.onUpdateLastName = this.onUpdateLastName.bind(this);
		this.onUpdateDateOfBirth = this.onUpdateDateOfBirth.bind(this);
		this.onUpdateContact = this.onUpdateContact.bind(this);
		this.onUpdateEmail = this.onUpdateEmail.bind(this);
		this.onUpdateBalance = this.onUpdateBalance.bind(this);
		this.onSearchEmployee = this.onSearchEmployee.bind(this);
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
		this.setState({firstname:e.target.value});
	}

	onUpdateLastName(e){
		this.setState({lastname:e.target.value});
	}

	onUpdateDateOfBirth(e){
		this.setState({birthdate:e.target.value});
	}
	onUpdateContact(e){
		this.setState({contact:e.target.value});
	}
	onUpdateEmail(e){
		this.setState({email:e.target.value});
	}
	onUpdateBalance(e){
		this.setState({balance:e.target.value});
	}

	onEditEmployee=(index, e)=>{
		let employeesCopy=Object.assign({},this.state.employeeList);
		let getCurrentEmp = [employeesCopy[--index]];
		employeesCopy[++index]=getCurrentEmp;

		this.setState({
			empId:index,
			isEdit:true,
			getCurrentEmp:getCurrentEmp,
			employeeList:this.state.employeeList,
			chckIfEmptyOrNot:''
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
			employeesCopy[empId].lastname  = lastname 	 === "" ? employeesCopy[empId].lastname : lastname;
			employeesCopy[empId].birthdate = birthdate 	 === "" ? employeesCopy[empId].birthdate : birthdate;
			employeesCopy[empId].contact   = contact 	 === "" ? employeesCopy[empId].contact : contact;
			employeesCopy[empId].email 	   = email  	 === "" ? employeesCopy[empId].email : email;
			employeesCopy[empId].balance   = balance 	 === "" ? employeesCopy[empId].balance : balance;
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
			
	}

	onReturn=()=>{
		this.setState({
			isEdit:false,
			success:true,
			employeeList:this.state.employeeList
		});	
	}

	onAddNewEmployee=()=>{
		this.setState({
			addNewEmp:true,
			firstname: '',
			lastname: '',
			birthdate:'',
			contact:'',
			email: '',
			balance:'',
		});
	}

	onSaveCreate=(e)=>{
		let firstname 	= this.state.firstname;
		let lastname 	= this.state.lastname;
		let birthdate   = this.state.birthdate;
		let contact 	= this.state.contact;
		let email 		= this.state.email;
		let balance 	= this.state.balance;
		let employeesCopy = [...this.state.employeeList];

		employeesCopy.push(Object.assign({},{
				'firstname':firstname,
				'lastname':lastname,
				'birthdate':birthdate,
				'contact': contact,
				'email':email,
				'balance':balance
			 }));


		if(firstname === "" || lastname === "" || birthdate === "" || contact === "" || email === "" || balance === "" ){
			this.setState({
				chckIfEmptyOrNot:"All fields are required."
			});

		}else {
			this.setState({
				firstname: firstname,
				lastname: lastname,
				birthdate:birthdate,
				contact: contact,
				email: email,
				balance:balance,
				employeeList:employeesCopy,
				addNewEmp:false,
				chckIfEmptyOrNot:"New employee added"
			});
		}

		e.preventDefault();
	}

	onDeleteEmployee=(index, e)=>{
		let empCopy = this.state.employeeList;
		if(window.confirm("Are you sure you want to delete thi employee?"))
		{
			for (let key in empCopy ) {
					if(++key === index){
						empCopy.splice(--index, 1);
					}
				}
			}
			this.setState({
					employeeList:empCopy
				});
		}

	onSearchEmployee=(e)=>{
		let firstname = e.target.value;
		console.log(firstname);
		if( firstname === "") {
			window.location.reload();
		 	console.log("rerender");

		} else {
			this.setState({
				firstname:firstname
			});
		}

	}

	onGetEmployee=(e)=>{
		let copyOfEmp = this.state.employeeList;
		let indexOfEmp = copyOfEmp.findIndex(emp => emp.firstname ===  this.state.firstname ); 
		let setReult = copyOfEmp[indexOfEmp];
		console.log(setReult === undefined ? this.state.employeeList : [setReult]);
		this.setState({
			employeeList: setReult === undefined ? this.state.employeeList : [setReult],
		})
	}

	render() {
		return(
			<div>

					<Search 
						searchEmp={this.onSearchEmployee}
						getEmp={this.onGetEmployee}
					/>
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
									<td>
										<button 
											className="btn btn-info" 
											onClick={this.onEditEmployee.bind(this,key)}>
											Edit
										</button>
									</td>
									<td>
										<button 
											className="btn btn-success">
											Add pay
										</button></td>
									<td>
										<button 
											className="btn btn-danger" 
											// onClick={this.onDeleteEmployee.bind(this,key)}>
											onClick={this.onDeleteEmployee.bind(this,key)}>
											Delete
										</button>
									</td>
								</tr>
							)}							
						</tbody>
					</table>: <Edit
						employeeList={this.state.getCurrentEmp} 
						returnEdit={this.onReturn}
						SaveEdit={this.onSaveEdit.bind(this)}
						onEditFirstname={this.onUpdateFirstname}
						onEditLastname={this.onUpdateLastName}
						onEditBirthdate={this.onUpdateDateOfBirth}
						onEditContact={this.onUpdateContact}
						onEditEmail={this.onUpdateEmail}
						onEditBalance={this.onUpdateBalance}
						success={this.state.success}
						/> 
					}
					{this.state.isEdit ? '' :<button className="btn btn-info" onClick={this.onAddNewEmployee}>Add new employee</button>}					
					
					{!this.state.addNewEmp ? '' : <Create
						createSave={this.onSaveCreate}
						onEditFirstname={this.onUpdateFirstname}
						onEditLastname={this.onUpdateLastName}
						onEditBirthdate={this.onUpdateDateOfBirth}
						onEditContact={this.onUpdateContact}
						onEditEmail={this.onUpdateEmail}
						onEditBalance={this.onUpdateBalance}
						/>  }
				<h4 className={this.state.chckIfEmptyOrNot === "All fields are required."  ? 'text text-danger' : 'text text-success' } >{this.state.chckIfEmptyOrNot}</h4>
				</div>
			);

	}
}
export default Employees;