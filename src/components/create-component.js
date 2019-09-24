import React from "react";


const Create=(props)=>{
	console.log(props);
	return(
			<div>
					<table  className="table table-condensed">
						<tbody>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Date of Birth</th>
								<th>Contact Number</th>
								<th>Email</th>
							</tr>
							<tr>
								<td>
									<input 
										type="text" 
										onChange={props.onEditFirstname} 
										/>
								</td>
								<td>
									<input 
										type="text" 
										onChange={props.onEditLastname}
									/>
								</td>
								<td>
									<input 
										type="text" 
										onChange={props.onEditBirthdate}
									/>
								</td>
								<td>
									<input 
										type="text" 
										onChange={props.onEditContact}
									/>
								</td>
								<td>
									<input 
										type="text" 
										onChange={props.onEditEmail}
									/>
								</td>
								<td>
									<input 
										type="text" 
										onChange={props.onEditBalance}
									/>
								</td>
								<td>
									<button 
 										className="btn btn-success"
 										onClick={props.createSave}
 										>Create
 									</button>
								</td>
							</tr>
						</tbody>
					</table>		
			</div>
		);
}

export default Create;