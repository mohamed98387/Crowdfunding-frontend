import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoFive() {
  return (
    <div >
    <div style={{"width":"1200px","height":"687px","marginLeft":"350px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Le déroulement d'un paiement par carte</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"650px"}}>
  1.Renseignez puis validez vos informations de carte (numéro de carte, date d'expiration, etc) sur la page de paiement. 

</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>

2.La plupart du temps, votre banque vous demandera de saisir un code à usage unique envoyé par SMS ou de renseigner un code spécifique que vous êtes la seule personne à connaitre pour valider et autoriser le paiement (procédure de vérification 3DSecure). Renseignez ce code sans erreur si possible immédiatement.
</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
<br/>
3.Si vous avez réalisé avec succès la procédure de vérification 3DSecure de votre banque, nous serons autorisés à valider votre paiement et vous serez alors redirigé(e) vers une page de confirmation sur notre site.
</p>

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

export default STwoFive
