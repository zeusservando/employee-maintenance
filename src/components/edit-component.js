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
								<td>{value.firstname}</td>
								<td>{value.lastname}</td>
								<td>{value.birthdate}</td>
								<td>{value.contact}</td>
								<td>{value.email}</td>
								<td>{value.balance}</td>
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