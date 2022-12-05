import React from 'react'
import {Link} from "react-router-dom"
import img47 from '../../images/img-47.png'
import { AiFillCaretLeft } from "react-icons/ai";
function PageOneSix() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img src={img47} style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Complete et editer votre projet</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>
    Ensuite , vous devez complete les informations de votre projet dans cette interface on cliquant sur 
    "complete or edit your project" 
</p>


<br/>

<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
    <Link to="/PageOnefive"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
   </Link>
</div>
<div>


   </div>
   </div>
   </div>
   </div>
  )
}

export default PageOneSix
