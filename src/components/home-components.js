import React, { Component } from 'react';

import Forms from "./form-component";
import Employees from './employees-component';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state={
			apiUsername: '',
			apiPassword:'',
			username:'',
			password:'',
			isValid:false,
			sessionStorage:sessionStorage.length
		};

		this.onCheckUsername = this.onCheckUsername.bind(this);
		this.onCheckPassword = this.onCheckPassword.bind(this);
		this.onHandleLogin = this.onHandleLogin.bind(this);
	}

	componentDidMount() {
		fetch("https://api.myjson.com/bins/kzguh")
		.then(res => res.json())
		.then((credentials) => {
			this.setState({
					apiUsername:credentials.username,
					apiPassword: credentials.password
				})
		},
		(error) => {
			this.setState({
					apiUsername: 'undefine',
					apiPassword: 'undefine'
				})
		});
	}

	onCheckUsername(e) {
		this.setState({username:e.target.value});
	}

	onCheckPassword(e) {
		this.setState({password:e.target.value});
	}

	onHandleLogin(e) {
		const apiUsername = this.state.apiUsername;
		const apiPassword = this.state.apiPassword;

		let username = this.state.username;
		let password = this.state.password;

		if( apiUsername === username && apiPassword === password) {
			
			let saveCredentialsObj = {username:username, password:password};
			
			sessionStorage.setItem('credentials', JSON.stringify(saveCredentialsObj));

			window.location.reload();

		} else {
			this.setState({isValid:true});
		}
		
		e.preventDefault();
	}

	
	render() {

		return(
				<div>
					{/* check if credentials is match redirect to employees component*/}
					{this.state.sessionStorage < 1 ? 
					<Forms 
						username={this.onCheckUsername}
						password={this.onCheckPassword}
						handleSubmit={this.onHandleLogin}
						message={!this.state.isValid ? ' ' : 'Invalid credentials.'}
					/>: <Employees/>}
					
				</div>
			);
	}
}