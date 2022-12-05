import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoThree() {
  return (
    <div >
    <div style={{"width":"1200px","height":"687px","marginLeft":"350px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Le prestataire de paiement Mangopay</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"650px"}}>
   MangoPay est notre établissement de monnaie électronique partenaire pour les collecte de fonds en Europe et dont la devise est l’Euro.

Il permet de contribuer de manière sécurisée aux projets présentés sur KissKissBankBank via les moyens de paiement suivants :

</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
-Visa
<br/>
-MasterCard
<br/>
-Maestro
<br/>
-Bancontact
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

export default STwoThree
