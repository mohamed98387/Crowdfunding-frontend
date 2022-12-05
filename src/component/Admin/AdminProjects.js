import React, { useState, useEffect } from 'react'
import axios from "axios";
import { FaDAndD } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { AiFillDelete } from "react-icons/ai";
import {connect} from "react-redux"
import {saveProject} from "../../actions/ProjectActions"
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";

import { FcApproval } from "react-icons/fc";
function AdminProjects(props) {
  const validationV={
    "validation": "true"
   }
  const [Projects, setProjects] = useState([]);
  const deleteProject = (id) => {
    axios.delete(`/api/project/admin/${id._id}`).then((res) => {
      if (res.data) {
    
        alert("project deleted")
   
      } else {
        alert("failed to delete project");
      }
    });
  };
  const getProjects = () => {
    axios.get("/api/project/all").then((res) => {
      setProjects(res.data)
      console.log(Projects)
    });
  };
  const validProject = (el) => {
 
    axios.put(`/api/project/validation/${el._id}`,validationV  ).then((res) => {
        
      if (res.data) {
        alert('project validation success')
        console.log(el.validation)
      }else{
        alert('project validation failed')
        console.log(res)
        console.log(el.validation)
      }
    });
  };
  useEffect(() => {
    getProjects();
  }, []);
  const renderTab = Projects.map((el, i) => {
    return (
      <tr key={i}>
   
          <td style={{ textAlign: "center" }}> {el.title}</td>
          <td style={{ textAlign: "center" }}> {el.category}</td>
          <td style={{ textAlign: "center" }}> {el.subCategory}</td>
          <td style={{ textAlign: "center" }}> {el.location}</td>
          <td style={{ textAlign: "center" }}> {el.Duration}</td>
          <td style={{ textAlign: "center" }}> {el.dateLaunche}</td>
          <td style={{ textAlign: "center" }}> {el.objective}</td>
          <td style={{ textAlign: "center" }}>
          <Link to="/projectDetails" style={{"textDecoration":"inherit"}}  >
          <AiOutlineEye color='blue'    size={25}
  onClick={()=>{props.setCurrent(el)
  console.log(el._id)}}
          />
           </Link>
           </td>
          
          <td style={{ textAlign: "center" }}>   <AiFillDelete  style={{"cursor":"pointer"}} 
          onClick={()=>deleteProject(el)} color='red' /></td>
{console.log(el)}
               <td style={{ textAlign: "center" }}>  {
                el.validation === true ?

<FcApproval />
: 
<button  onClick={()=>validProject(el)}
 style={{"background":"transparent","padding":"2px","border":"0.1px solid grey","cursor":"pointer"}}>
  valider</button>
               }</td>
        
     
      </tr>
    );
  });
  return (
    <React.Fragment>
    

   <div style={{"display":"flex"}}>
    <div style={{backgroundColor:"black","width":"220px","height":"660px"}}>
     <Sidebar />
    </div>
    <div style={{width:"900px",marginLeft:"30px"}}>
    <div>
      <table  style={{ width: "1100px",marginTop:"50px"}}>
        <thead style={{ textAlign: "center" }}>
          <tr style={{ textAlign: "center" }}>
            <th style={{"color":"blue"}}>title</th>
            <th  style={{"color":"blue"}}>category</th>
            <th  style={{"color":"blue"}}>subCategory</th>
            <th  style={{"color":"blue"}}>location</th>
            <th  style={{"color":"blue"}}>Duration</th>
            <th  style={{"color":"blue"}}>dateLaunche</th>
            <th  style={{"color":"blue"}}>objective</th>
            <th  style={{"color":"blue"}}>go to project</th>
    
            <th  style={{"color":"blue","cursor":"pointer"}}>delete</th>
            <th  style={{"color":"blue","cursor":"pointer"}}>valider</th>
            
           
          </tr>
        </thead>
        <tbody style={{marginLeft:"50px"}} >
   
        {renderTab}
      
          </tbody>
      </table>
    </div>
    </div>


 


    </div>

 </React.Fragment>
  )
}
const MapDispatchToProps=dispatch=>{
  return{
   setCurrent:project=>dispatch(saveProject(project))
  
   
  }
}
export default connect(null,MapDispatchToProps)(AdminProjects)
