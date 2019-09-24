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
								<th></th>
							</tr>
 								{props.employeeList.map((value, key)=>
							<tr key={key}>
								<td><input type="text" onChange={props.onEditFirstname}  defaultValue={value.firstname}/></td>
								<td><input type="text" onChange={props.onEditLastname}  defaultValue={value.lastname}/></td>
								<td><input type="text" onChange={props.onEditBirthdate}  defaultValue={value.birthdate}/></td>
								<td><input type="text" onChange={props.onEditContact}  defaultValue={value.contact}/></td>
								<td><input type="text" onChange={props.onEditEmail}  defaultValue={value.email}/></td>
								<td><input type="number" onChange={props.onEditBalance} min="1" max="100000" size="20"   defaultValue={value.balance}/></td>
							</tr>
							)}
					</tbody>
				</table>

				<h3 style={{color:'#4aff12'}}>{props.success ? "Record updated!": ""}</h3>
				<br/><br/>			

				<button 
					className="btn btn-success"
					onClick={props.SaveEdit} 
				>Save
				</button> &nbsp; &nbsp;
				<button 
					className="btn btn-warning" 
					onClick={props.returnEdit}
				>Return
				</button>
				<br/><br/>			
			</div>
 					)
 }

 export default Edit;