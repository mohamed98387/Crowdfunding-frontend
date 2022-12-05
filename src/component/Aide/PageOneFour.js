import React from 'react'
import {Link} from "react-router-dom"
import img45 from '../../images/img-45.png'
import { AiFillCaretLeft } from "react-icons/ai";
function PageOneFour() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img src={img45} style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>On démarre !</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>
  Maintenant que vous êtes connecté.e à votre compte, nous vous demandons de répondre à quelques questions pour nous permettre construire votre projet.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Donc dans cette interface vous pouvez inserer la categorie et la sous categortie de votre projet
</p>
<br/>

<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
    <Link to="/PageOneThree"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
   </Link>
</div>
<div>
<Link to={"/PageOnefive"}> 
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

export default PageOneFour
