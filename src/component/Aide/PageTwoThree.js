import React from 'react'
import {Link} from "react-router-dom"
import img48 from '../../images/img-48.jpg'
import { AiFillCaretLeft } from "react-icons/ai";
function PageTwoThree() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
    <img src={img48} style={{"height":"590px","width":"700px","marginTop":"0px"
    ,"marginLeft":"0px"}}></img>
   
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Quelle solution dans ce cas ?</h1>

<br/>

<p style={{"marginLeft":"50px","width":"500px"}}>
Nous vous conseillons de vous rapprocher d'une association qui partage vos valeurs et vos objectifs et à leur proposer votre projet. Le projet pourra alors être présenté par l'association elle-même et vous pourrez participer à sa réalisation.
</p>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
    <Link to="/PageTwoOne"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
   </Link>
</div>
   </div>
   </div>
  )
}

export default PageTwoThree
