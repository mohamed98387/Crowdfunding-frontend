import React from 'react'
import {Link} from "react-router-dom"
import img44 from '../../images/img-44.png'
import { AiFillCaretLeft } from "react-icons/ai";
function PageOneThree() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img src={img44} style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Créez un compte ou connectez-vous</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Avant toute chose, nous vous demandons de créez un compte ou vous connecter à un compte pour que nous puissions associer
   votre proposition de projet à celui-ci.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Si vous devez créer un compte, choisissez une adresse e-mail valide pour que recevoir nos mails et
 les notifications importantes liées à votre projet.
</p>
<br/>

<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
    <Link to="/PageOneTwo"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
   </Link>
</div>
<div>
<Link to={"/PageOnefour"}> 
   <button style={{"width":"170px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px","marginLeft":"10px"}}>
 Suivant</button>
   </Link>
   </div>
   </div>
   </div>
   </div>
  )
}

export default PageOneThree
