import React,{ Component }  from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import VideoBg from "../../video/Login_Motion.mp4"
import {v1 as uuid} from "uuid"
import {setAlert,removeAlert} from "../../actions/AlertActions"
import {register ,clearError} from "../../actions/AuthActions"
import {connect} from "react-redux"
import Alerts from "../Alert/Alerts"
import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
class Signup extends Component  {
	
	constructor(props){
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: ''
		}
	}
	handleChange=e=>{
		this.setState({[e.target.name]: e.target.value })
	}
	registerNow=(e)=>{
		e.preventDefault();
		if(this.state.firstname === '' || this.state.lastname === '' || this.state.email === '' || this.state.password === ''){
		
			let id= uuid();
			this.props.setAlert("all fields are required",'danger',id)
			setTimeout(()=>{
            this.props.removeAlert(id)
			},5000);
		}else{	

			this.props.register({
				firstname:this.state.firstname ,
				lastname:this.state.lastname ,
				email: this.state.email,
				password: this.state.password
			})
		}
	}
	
	componentWillReceiveProps(nextProps){
		
		if(nextProps.auth.error === "user already exists"){
			let id = uuid();
			this.props.setAlert(nextProps.auth.error, "danger" ,id)
			setTimeout(()=>{
				this.props.removeAlert(id)
				this.props.clearError()
				},5000);
		}
  
	}
	render(){
	
  return (
    <div>
    <div className={styles.signup_container}>
	<video src={VideoBg} autoPlay loop muted />
			<div className={styles.signup_form_container}>
			
				<div className={styles.left}>
				
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} >
						<h1>Create Account</h1>
						<Alerts />

						<input
							type="text"
							placeholder="First Name"
							name="firstname"
						
							onChange={this.handleChange}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							onChange={this.handleChange}
							required
							className={styles.input}
						/>
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
						
						<button onClick={this.registerNow} className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
    </div>
  )
}}
const mapStateToProps = state =>{
return{
	auth:state.auth

//		setAlert:(msg, type, id)=>dispatch(setAlert(msg, type, id)),
//		clearAlert:id=>dispatch(removeAlert(id))
}
}
export default connect(mapStateToProps,{setAlert,removeAlert,register,clearError})(Signup)
