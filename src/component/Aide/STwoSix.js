import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoSix() {
  return (
    <div >
    <div style={{"width":"1200px","height":"687px","marginLeft":"350px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Les moyens de paiement acceptés</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"650px"}}>
   Nous acceptons toutes les cartes bancaires suivantes : 

</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
    -Carte Bleue
    <br/>
    -Carte VISA
    <br/>
    -Carte MasterCard
    <br/>
   -Maestro - Bancontact
</p>
<br/>
<p style={{"marginLeft":"50px","width":"650px"}}>
   
<b>La carte de paiement utilisée devra être compatible avec la procédure de vérification 3D Secure.</b> Si le 3D Secure n'est pas activé sur votre carte, votre paiement sera refusé. 
</p>
<br/>
<p style={{"marginLeft":"50px","width":"650px"}}>
   
<b>Pour les paiements par chèque,</b> nous vous invitons à contacter directement le porteur du projet. Les transactions seront gérées en dehors de notre plateforme mais les montants pourront être crédités sur sa collecte.
</p>
<br/>
<p style={{"marginLeft":"50px","width":"650px"}}>
   
<b>Pour les paiements par virements, </b>nous acceptons à titre exceptionnel des paiements par virement lorsque le paiement par carte est impossible (problème avec la carte ou montant du paiement trop important pour être payé par carte). Merci de nous contacter pour que nous en discutions ensemble au préalable. </p>

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

export default STwoSix
