import React from 'react'

import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoOneTwo() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Comment ne plus suivre un projet ?</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Afin d'annuler l'abonnement à cette page du projet, il vous suffit de cliquer une nouvelle fois sur le bouton. 

</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Vous ne recevrez plus aucune actualité par mail pour cette campagne. </p>
<br/>
<br/>

<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
   <Link to="/STwoOneOne"> 
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

export default STwoOneTwo
