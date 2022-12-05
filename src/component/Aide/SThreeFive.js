import React from 'react'
import img48 from '../../images/img-48.jpg'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SThreeFive() {
  return (
    <div style={{"display":"flex"}}>
     <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
       <img src={img48} style={{"height":"330px","width":"600px","marginTop":"120px"
    ,"marginLeft":"30px"}}></img>
     </div>
     <div style={{"width":"700px","height":"587px"}}>
   <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Est-il possible de collecter plus que l'objectif de mon projet ?</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Vous pouvez bien sûr dépasser l'objectif de votre projet. Il n'y a pas de maximum.
</p>
<br/>

<p style={{"marginLeft":"50px","width":"500px"}}>
Tant qu'il vous reste du temps, vous pouvez continuer à collecter.
</p>
<br/>

<p style={{"marginLeft":"50px","width":"500px"}}
>Vous avez déjà atteint votre objectif ? Bravo !
Pour vos contributeurs, il est tout aussi motivant de vous permettre d'atteindre 150 ou 200% de votre objectif.

Fixez toujours de nouveaux objectifs, pour continuer à entretenir la dynamique de votre collecte. </p>
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

export default SThreeFive
