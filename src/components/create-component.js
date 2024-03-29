import React from "react";


const Create=(props)=>{
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
								<th>Balance</th>
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
										type="number" 
										onChange={props.onEditBalance}
										className="form-control"
										min={0} 
										max={100000} 
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<button 
							className="btn btn-success"
							onClick={props.createSave}
							>Create
					</button>		
			</div>
		);
}

export default Create;