import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { Button } from './Button';
import './Navbar.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import contrast from '../../src/images/contrast.png'
import {Link as LinkRoll} from "react-scroll"
import {connect} from "react-redux"
import {logout} from "../actions/AuthActions"
import img36 from '../images/img-36.jpg'
import { Dropdown } from 'react-bootstrap';
const Navbar= props=> {
  const [isActive, setIsActive] = useState(false);
  const options = ["My Dashboard", "logout"];
const [sidebar,setSidebar] = useState(false)
const showSidebar = () =>setSidebar(!sidebar)
  const userConnected = () =>(
    <>
    <nav className="navbar">
    
    <div className="navbar-container">
      <Link to="#" className='menu-bars'>
    <FaIcons.FaBars style={{color:"rgb(15, 14, 14)",marginTop:"20px",marginLeft:"0px"}} onClick={showSidebar} />
    </Link>
    <nav className={sidebar ? 'nav-menuu active' : 'nav-menuu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
        <Link to="#" smooth={true} durationn={1000} className='menu-bars' onClick={showSidebar}>
       <AiIcons.AiOutlineClose style={{color:"#ffff"}} />
        </Link>
        </li>
        {SidebarData.map((item , index) =>{
          return(
          <li key={index} className={item.cName} style={{cursor:"pointer"}}>
            <LinkRoll to={item.path} smooth={true} durationn={1000} onClick={showSidebar}>
              {item.icon}
              <span style={{fontSize:"17.5px"}}>{item.title}</span>
            </LinkRoll>
          </li>
          );
        }
        )}
      </ul>
    </nav>
        <Link as={Link} to="/" className="navbar-logo" smooth={true} durationn={1000}>
        <img  src={contrast} alt="img1" /> 

        </Link>
        <ul className={'nav-menu'}>
  {/*  <li className='firstandlastName'>
        hello,{props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}
      </li> */}
      <li className='nav-item '>
     
                <Link  to="/Decouvrir" className="nav-links" >
                find the projects

            </Link>
            
            </li>
        
    </ul>
    <Link  to="/Aide"  style={{"textDecoration":"inherit"}}  >
  
<h3 className='Aide' style={{"marginLeft":"5px","borderWidth":"2px","border":"0.8px solid grey","padding":"6px"
,"borderRadius":"20px","cursor":'pointer',"textDecoration":"none","listStyle":"none",
"color":"black"}}>Aide</h3>

</Link>

    <Button onClick={()=>{console.log(props)}} buttonStyle="btn--outline" > launch a project
</Button> 
<img className="imgProfile" src={props.auth.user.pic=== undefined ? img36 : props.auth.user.pic} alt="img35" onClick={(e) => setIsActive(!isActive)}/> 
<h5 style={{"marginLeft":"5px"}}>{props.auth.user.firstname + ' ' + props.auth.user.lastname}</h5>

{isActive && (
        <div className="dropdown-content-navbar">
          
            <div 
              onClick={(e) => {
                console.log(props.auth.user.pic)
             
                setIsActive(false);
              }}
              className="dropdown-item-navbar"
            >
              { props.auth.user.role === 1 ? 
                <Link  to="/AdminProfile"  style={{"textDecoration":"none","color":"rgb(15, 14, 14)"}} >
              <h4> {options[0]}</h4>
              
              </Link> :
  <Link  to="/MyProfile"  style={{"textDecoration":"none","color":"rgb(15, 14, 14)"}} >
  <h4> {options[0]}</h4>
  
  </Link>
              }
             
              <a onClick={() => {props.logout() } } style={{"cursor":"pointer","marginTop":"15px"}}>
            <i className='fas fa-sign-out-alt' style={{"cursor":"pointer","marginTop":"15px"
          }}>
          
            </i>
            logout
           </a>
            </div>
        
        </div>
      )}
        
           
    </div>
</nav>








</>
   
  )
  const guest = () =>(
    
    <>
    <nav className="navbar">
    
    <div className="navbar-container">
      <Link to="#" className='menu-bars'>
    <FaIcons.FaBars style={{color:"rgb(15, 14, 14)",marginTop:"20px",marginLeft:"0px"}} onClick={showSidebar} />
    </Link>
    <nav className={sidebar ? 'nav-menuu active' : 'nav-menuu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
        <Link to="#" smooth={true} durationn={1000} className='menu-bars' onClick={showSidebar}>
       <AiIcons.AiOutlineClose style={{color:"#ffff"}} />
        </Link>
        </li>
        {SidebarData.map((item , index) =>{
          return(
          <li key={index} className={item.cName} style={{cursor:"pointer"}}>
            <LinkRoll to={item.path} smooth={true} durationn={1000} onClick={showSidebar}>
              {item.icon}
              <span style={{fontSize:"17.5px"}}>{item.title}</span>
            </LinkRoll>
          </li>
          );
        }
        )}
      </ul>
    </nav>
        <Link as={Link} to="/" className="navbar-logo" smooth={true} durationn={1000}>
        <img  src={contrast} alt="img1" /> 

        </Link>
        <ul className={'nav-menu'}>
            <li className='nav-item'>
                <Link  to="/Decouvrir" className="nav-links" >
                find the projects

            </Link>
            </li>
            
             
           
              
                
            </ul>
            <Link  to="/Aide" style={{"textDecoration":"inherit"}}  >
  
<h3 className='Aide' style={{"marginLeft":"5px","borderWidth":"2px","border":"0.8px solid grey","padding":"6px"
,"borderRadius":"20px","cursor":'pointer',"textDecoration":"none","listStyle":"none",
"color":"black"}}>Aide</h3>

</Link>
            <Button buttonStyle="btn--outline" > launch a project
</Button>

            <Link  to="/login" >
            <button className="btn--outline-login" style={{ backgroundColor:"#000000"}} > login
</button>
</Link>
   
    </div>
</nav>









</>










   

    
  )
  return (
    <>
   
   {

((props.auth.isAuthenticated ) && (props.auth.token !== null ) && 
(props.auth.user !== null))? userConnected() : guest()
}
    
    </>
  )
}
function DropdownItem(){
  return(
    <li className='dropdownItem'>
     <h1>Dashboard</h1>
    </li>
    );
}
const mapStateToProps = state =>{
  return{
    auth:state.auth
  }
  }
export default connect(mapStateToProps,{logout})(Navbar)
