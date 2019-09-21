import React from 'react';

const forms = (props) =>{
	return(
			<div>
				<form onSubmit={props.handleSubmit}>
					<p>Username:<input type="text" onChange={props.username}/></p>
					<p>Password:<input type="password" onChange={props.password}/></p>
					<p><input type="submit" value="Submit" /></p>
				</form>
				<p><span style={{color:'red'}}>{props.message}</span></p>
			</div>
		)
}

export default forms;