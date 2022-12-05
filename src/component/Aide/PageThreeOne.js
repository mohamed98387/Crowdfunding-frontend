import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function PageThreeOne() {
  return (
    <div >
    <div style={{"width":"1200px","height":"687px","marginLeft":"350px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Comment contribuer ?</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"650px"}}>Comme il s'agit probablement de votre première visite sur contrast, voici les points essentiels à connaître avant de contribuer :
</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
-Contribuer financièrement sur contrast c'est aider un créateur à réaliser son projet. Celui-ci vous proposera souvent des contreparties en échanges de votre contribution mais vous pouvez aussi (sauf exception) donner un montant libre sans choisir de contrepartie.
<br/>
-Tous les projets fonctionnent sur le principe du tout ou rien. Le projet auquel vous contribuez doit atteindre 100% de son objectif pour récupérer les fonds, produire et livrer les contreparties promises. contrast n'est pas un site e-commerce.
<br/>
-Le paiement de votre contribution est sécurisé. Vous pouvez l'annuler jusqu'à 48h avant la fin de la durée indiquée du projet et être remboursé·e intégralement sans frais.
</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
Voici maintenant comment contribuer. Vous allez voir, c'est assez simple :
</p>
<p style={{"marginLeft":"50px","width":"650px"}}>
<b>-rendez-vous</b> sur la page du projet qui a attiré votre attention
<br/>
<b>-sélectionnez </b>les contreparties de votre choix dans la colonne; de droite. Si vous ne souhaitez pas de contrepartie, vous pouvez choisir le montant de votre don sans contrepartie, tout en bas de cette même colonne;
<br/>
<b>-validez</b> votre sélection
<br/>
<b>-créez votre compte</b> (c'est gratuit et cela facilite le suivi de votre contribution);
<br/>
<b>-Validez votre paiement </b>
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
<Link to={"/Decouvrir"}> 
   <button style={{"width":"270px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px","marginLeft":"10px"}}>
 Decouvrir les projets</button>
   </Link>
   </div>
   </div>
  
   </div>
   </div>
  )
}

export default PageThreeOne
