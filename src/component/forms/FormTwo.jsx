import { useState,useEffect } from "react";
import "./Forms.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {lodedUser} from '../../actions/AuthActions'
import {editProject} from '../../actions/ProjectActions'
function FormTwo(props) {

   const location=props.location
   const _id=props.project.project._id;
  const [isActive, setIsActive] = useState(false);
  const [isActivetwo, setIsActivetwo] = useState(false);
  const options = ["Art", "Artisanat", "Sport","Cinema et video","jeux", "design","Edition","Theatre"];
  const optionstwo = ["Denmark", "France", "Tunisie","Canada","Germany","America","Italy","England"];
  const updatedProject={_id,location}
  return (
    <div className="container_forms " style={{"paddingTop":"10px"}}>
      <div style={{"display":"flex"}}>
      <h4 >2/2</h4>
    <h1 className='title_dropdown-ftwo'>To complete select the geographic location of your project</h1>

    </div>
<div className="two-dropdown-ftwo">


    <div className="dropdown-ftwo">
           
      <div className="dropdown-btn-ftwo" onClick={(e) => setIsActivetwo(!isActivetwo)}>
        {props.location}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActivetwo && (
        <div className="dropdown-content-ftwo">
          {optionstwo.map((option) => (
            <div 
              onClick={(e) => {
          console.log(props.project.project._id)
                props.setSelectedthree(option);
                setIsActivetwo(false);
              }}
              className="dropdown-item-ftwo"
            >
             {option}
            </div>
          ))}
        </div>
      )}
    </div>


    </div>
<Link to={props.auth.token === null ? "/login":

"/MyProfile" } >
    
        <button onClick={()=>{props.editProject(updatedProject)}} className="btn--outline-terminer-ftwo" >finish</button>
        </Link>  
    </div>
  );
}
const mapStateToProps = state =>{
  return{
    // to={props.auth.user === null ? "/login":"" } 
    auth:state.auth,
    project:state.project
 
  }
  
 
    }
export default  connect(mapStateToProps,{editProject})(FormTwo);