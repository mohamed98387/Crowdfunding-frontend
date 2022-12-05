import React from 'react'
import img52 from '../../images/img-52.png'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SThreeFour() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img  style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Objectifs minimum et maximum</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>L'objectif minimum d'un projet est de 1 €. Il n'y a pas de limite maximum.
</p>


<p style={{"marginLeft":"50px","width":"500px"}}>
Cependant, plus votre objectif sera élevé plus il sera difficile de l'atteindre en théorie. 
</p>


<p style={{"marginLeft":"50px","width":"500px"}}
>contrast fonctionne sur le principe du "tout ou rien", il est  toujours possible de récupérer plus que votre objectif mais jamais moins.</p>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Mieux vaut donc partir sur un objectif minimum et le dépasser même largement, plutôt que de prendre le risque de ne pas atteindre un objectif trop élevé.
</p>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
En cas de doute, indiquez l'objectif que vous aviez en tête et soumettez votre projet à notre équipe. Votre coach vous aidera à définir le bon objectif pour votre projet avant de le mettre en ligne.</p>
<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
   <Link to="/Aide"> 
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

export default SThreeFour
