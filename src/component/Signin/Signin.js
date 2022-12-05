import React from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import VideoBg from "../../video/Login_Motion.mp4"
import { Component } from 'react';
import {v1 as uuid} from "uuid"
import {connect} from "react-redux"
import {setAlert,removeAlert} from "../../actions/AlertActions"
import {login,clearError} from "../../actions/AuthActions"
import Alerts from "../Alert/Alerts"
import {lodedUser} from '../../actions/AuthActions'
class Signin extends Component {

  
  constructor(props){
		super(props);
		this.state = {
			email:"",
			password:"",
      role:null
		}
	}

  componentWillReceiveProps(nextProps){

		if(nextProps.auth.error === "Please Register before!" || nextProps.auth.error === "Wrong Password" ){
			let id = uuid();
			this.props.setAlert(nextProps.auth.error, "danger" ,id)
			setTimeout(()=>{
				this.props.removeAlert(id)
				this.props.clearError()
				},5000);
		}
  
	}
  loginNow=(e)=>{
    
		e.preventDefault();

		if( this.state.email === '' || this.state.password === ''){
		
			let id= uuid();
			this.props.setAlert("Please enter your credentials before !",'danger',id)
			setTimeout(()=>{
            this.props.removeAlert(id)
			},5000);
		}else{	

			this.props.login({
				
				email: this.state.email,
				password: this.state.password
			})
      console.log(this.props)
		}
	}
	handleChange=e=>{
		this.setState({[e.target.name]: e.target.value })
	}
  
  render(){
    
  return (
 
    <div className={styles.login_container}>
       <video src={VideoBg} autoPlay loop muted />
    <div className={styles.login_form_container}>
      <div className={styles.left}>
        <form className={styles.form_container} >
          <h1>Login to Your Account</h1>
          <Alerts />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
        
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
           
              onChange={this.handleChange}
            required
            className={styles.input}
          />
        <Link to="/">
          <button   onClick={this.loginNow}  type="submit" className={styles.green_btn}>
            Sing In
          </button>
          </Link>
        </form>
      </div>
      <div className={styles.right}>
        <h1>New Here ?</h1>
        <Link to="/signup">
          <button type="button" className={styles.white_btn}>
            Sing Up
          </button>
        </Link>
      
      </div>
    </div>
  </div> 
  
    
  )

              }}


              const mapStateToProps = state =>{
                return{
                  auth:state.auth

                }
                }
export default connect(mapStateToProps, {login,setAlert,removeAlert,clearError})(Signin)
