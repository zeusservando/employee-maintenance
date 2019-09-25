import React from 'react';

const Search =(props)=>{
	return(
		<div className="topnav">
		  <input type="text" onChange={props.searchEmp} placeholder="Search.." /> &nbsp;  
		  <button className="btn btn-info">Search</button>
		</div>  
		);
}

export default Search;