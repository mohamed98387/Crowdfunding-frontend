import { useState } from "react";
import "./Forms.css"
import {addProject} from '../../actions/ProjectActions'
import {v1 as uuid} from "uuid"
import {Link} from "react-router-dom"
import VideoBg from "../../video/White.mp4"
import {connect} from 'react-redux'
function FormOne(props) {
  const [category, setSelected] = useState("Choose One");
  const [subCategory, setSelectedtwo] = useState("Choose One");
  const projectadded={category,subCategory}
  const [isActive, setIsActive] = useState(false);
  const [isActivetwo, setIsActivetwo] = useState(false);
  const options = ["Art", "Artisanat", "Musique","Cinema et video","jeux", "design","Edition","Theatre"];
  const optionsone = ["concept art", "digital art", "public art","video art"];
  const optionstwo = ["candles", "borderry", "bedspreads","hook"];
  const optionsthree = ["Rock", "hip hop", "jazz","classical music"];
  const optionsfour = ["Action", "romantic", "comedy","family"];
  const optionsfive = ["card games", "video games", "live games","mobile games"];
  const optionssix= ["architecture", "citizen design", "graphics","typography"];
  const optionsseven = ["anthologies", "zines", "art books","fiction"];
  const optionseight = ["comedy", "experimental", "festivals","immersion"];
  return (
    <div className="container_forms "style={{"paddingTop":"20px"}}>
  <video className="videoForm"  autoPlay loop muted />
      <div className="container-formeOne">
        <div style={{'display':'flex'}}>
    <h4>1/2</h4>
    <h1 className='title_dropdown'> Let's start by setting up your project</h1>
    </div>
    <h4 className='titletwo_dropdown'>
    Select the main category and subcategory of your project</h4>
          <h4 className='titlethree_dropdown'>These values which will remain editable,will help your contributors find your project</h4>
   
<div className="two-dropdown">

    <div className="dropdown">
           
      <div className="dropdown-btn" onClick={(e) => {setIsActive(!isActive);
      setSelectedtwo("choose One")
      }
      }>
        {category}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div 
              onClick={(e) => {
                console.log(category)
              
                
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
             {option}
            </div>
          ))}
        </div>
      )}
    </div>


    <div className="dropdown">
           
      <div className="dropdown-btn" onClick={(e) => setIsActivetwo(!isActivetwo)}>
        {subCategory}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActivetwo && (
        <div className="dropdown-content">
          {
         (category==="Art") ? 
          optionsone.map((option) => (
            <div 
              onClick={(e) => {
                console.log(  subCategory)
                setSelectedtwo(option);
                setIsActivetwo(false);
              }}
              className="dropdown-item"
            >
             {option}
            </div>
          ))
         :   (category==="Artisanat") ?
         optionstwo.map((option) => (
          <div 
            onClick={(e) => {
              setSelectedtwo(option);
              setIsActivetwo(false);
            }}
            className="dropdown-item"
          >
           {option}
          </div>
        ))
        
        :   (category==="Sport") ?
        optionsthree.map((option) => (
         <div 
           onClick={(e) => {
             setSelectedtwo(option);
             setIsActivetwo(false);
           }}
           className="dropdown-item"
         >
          {option}
         </div>
       ))
       : (category==="Cinema et video") ?
       optionsfour.map((option) => (
        <div 
          onClick={(e) => {
            setSelectedtwo(option);
            setIsActivetwo(false);
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      : (category==="jeux") ?
       optionsfive.map((option) => (
        <div 
          onClick={(e) => {
            setSelectedtwo(option);
            setIsActivetwo(false);
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      : (category==="design") ?
       optionssix.map((option) => (
        <div 
          onClick={(e) => {
            setSelectedtwo(option);
            setIsActivetwo(false);
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      : (category==="Edition") ?
       optionsseven.map((option) => (
        <div 
          onClick={(e) => {
            setSelectedtwo(option);
            setIsActivetwo(false);
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      :
       optionseight.map((option) => (
        <div 
          onClick={(e) => {
            setSelectedtwo(option);
            setIsActivetwo(false);
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))

          }
        </div>
      )}
    </div>


    </div>
    <Link to="/formTwo" >
        <button
         className="btn--outline-continuer"
         onClick={()=>{
         
         props.addProject(projectadded)
         }}
         >Continue</button>
         </Link> 
        </div>
    </div>
  );
}



export default connect(null,{addProject})(FormOne);