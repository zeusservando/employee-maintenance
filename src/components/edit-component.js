import React from "react"

 const Edit = (props)=>{

 	return (
 			<div>
 			<table  className="table table-condensed">
						<tbody>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Date of Birth</th>
								<th>Contact Number</th>
								<th>Email</th>
								<th>Balance</th>
								<th></th>
							</tr>
 								{props.employeeList.map((value, key)=>
							<tr key={key}>
								<td><input type="text" onChange={props.onEditFirstname}  defaultValue={value.firstname}/></td>
								<td><input type="text" onChange={props.onEditLastname}  defaultValue={value.lastname}/></td>
								<td><input type="text" onChange={props.onEditBirthdat}  defaultValue={value.birthdate}/></td>
								<td><input type="text" onChange={props.onEditContact}  defaultValue={value.contact}/></td>
								<td><input type="text" onChange={props.onEditEmail}  defaultValue={value.email}/></td>
								<td><input type="text" onChange={props.onEditBalance}  defaultValue={value.balance}/></td>
								<td>
									<button 
 										className="btn btn-success"
 										onClick={props.SaveEdit} 
 										>Save
 									</button>
								</td>
								<td>
									<button 
 										className="btn btn-warning" 
 										onClick={props.cancelEdit}
 										>Cancel
 									</button>
								</td>
							</tr>
							)}
					</tbody>
			</table>		
			</div>
 					)
 }

 export default Edit;