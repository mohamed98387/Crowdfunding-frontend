import React from 'react'
import img42 from '../../images/img-42.png'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SFourFour() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img src={img42} style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Comment créer un projet ?</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Nous avons hâte de découvrir votre projet et vous invitons à créer votre page gratuitement dès maintenant.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Ce guide vous montrera comment créer votre projet pas à pas. En général, cela ne prend pas plus de 5 minutes.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}
>L'inscription et la création de projet est gratuite. Nous prélevons un pourcentage de 5% (+3% de frais bancaires, soit 8%TTC) à la fin de la collecte, uniquement si celle-ci atteint son objectif.</p>
<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
   <Link to="/Aide"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
  </Link>
</div>
<div>


<Link to={"/PageOneTwo"}> 
  <button style={{"marginLeft":"10px","width":"170px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px"}}>
   créer mon projet </button>
  </Link>
  </div>
  </div>
   </div>
   </div>
  )
}

export default SFourFour
