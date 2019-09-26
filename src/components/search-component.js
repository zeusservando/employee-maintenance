import React from 'react';

const Search =(props)=>{
	return(
		<div className="topnav">
		  <input 
		  	type="text" 
		  	onChange={props.searchEmp} 
		  	placeholder="Search.." 
		  	/> &nbsp;  
		  <button 
		  	className="btn btn-info" 
		  	onClick={props.getEmp}
		  	>Search
	  	</button>
	  	<br/>
		</div>  
		);
}

export default Search;