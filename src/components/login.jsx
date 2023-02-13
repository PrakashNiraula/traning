import React, { Component } from 'react'
//import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Navigate } from 'react-router-dom';

export default class login extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             loggedStatus:false,
             role:''
        }
    }
    handleChange=(e)=>this.setState({[e.target.name]:e.target.value});


    submitdata=(username,password)=>{
    
		// console.log(username,password);
		if(username=="admin" && password=="admin"){
			this.setState({
				loggedStatus:true
			})

		}
     }
    



  render() {

	if(this.state.loggedStatus==true){
		return <Navigate to='/home'/>
	}else{
		return (
			<div>
	  
	  <div class="background">
			  <div class="shape"></div>
			  <div class="shape"></div>
		  </div>
		  <form>
			  <h3>Ace Skill Traning Center Login</h3>
	  
			  <label for="username">Username</label>
			  <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
	  
			  <label for="password">Password</label>
			  <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
	  
			  
			  <button name='login' onClick={this.submitdata(this.state.username,this.state.password)}>Log In</button>
		  </form>
		  
			  
			  {/* <div class="limiter">
			  <div class="container-login100">
				  <div class="wrap-login100">
					  <div class="login100-pic js-tilt" data-tilt>
						  <img src="images/img-01.png" alt="IMG"/>
					  </div>
	  
					  <form class="login100-form validate-form">
						  <span class="login100-form-title">
							  Admin Login
						  </span>
	  
						  <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							  <input class="input100" type="text" name="email" placeholder="Email"/>
							  <span class="focus-input100"></span>
							  <span class="symbol-input100">
								  <i class="fa fa-envelope" aria-hidden="true"></i>
							  </span>
						  </div>
	  
						  <div class="wrap-input100 validate-input" data-validate = "Password is required">
							  <input class="input100" type="password" name="pass" placeholder="Password"/>
							  <span class="focus-input100"></span>
							  <span class="symbol-input100">
								  <i class="fa fa-lock" aria-hidden="true"></i>
							  </span>
						  </div>
						  
						  <div class="container-login100-form-btn">
							  <button class="login100-form-btn">
								  Login
							  </button>
						  </div>
					  
					  </form>
				  </div>
			  </div>
		  </div> */}
			</div>
		  );

	}

  }
}
