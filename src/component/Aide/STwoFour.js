import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoFour() {
  return (
    <div >
    <div style={{"width":"1200px","height":"687px","marginLeft":"350px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Si le projet n'atteint pas son objectif</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"650px"}}>
   Le créateur du projet ne touche rien et tous les contributeurs sont remboursés automatiquement et intégralement sans frais.

</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>

<br/>
Le remboursement est en général visible sous 3 à 5 jours sur le relevé d'opérations de la banque émettrice de la carte utilisée lors du paiement de la contribution.
</p>
<br/>


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

export default STwoFour
