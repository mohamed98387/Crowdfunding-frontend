import React from 'react'
import img50 from '../../images/img-50.jpg'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SOneThree() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"887px" }}>
      <img src={img50} style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>C'est quoi une contrepartie ?</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>
  Les créateurs qui réalisent des campagnes de dons ponctuelles proposent quasi systématiquement des contreparties que les donateurs peuvent choisir de recevoir en échange de leur don.
</p>
<br/>

<p style={{"marginLeft":"50px","width":"500px"}}>
Les contreparties varient d'un projet à l'autre et peuvent prendre différentes formes : symboliques (votre nom au générique), matérielle (1 an d'abonnement à une revue), expérientielle (1 invitation à la première du film produit), exclusive (une rencontre avec le créateur), mais ne sont jamais financières. Le créateur peut aussi proposer plusieurs éléments dans une contrepartie pour former des sortes de pack. 
</p>
<br/>

<p style={{"marginLeft":"50px","width":"500px"}}
>
Les contributeurs peuvent choisir une ou plusieurs contreparties ou plusieurs exemplaires de la même contrepartie. Ils peuvent aussi choisir de contribuer à un projet sans prendre de contrepartie. Dans ce cas, on parle alors d'un don libre.

Les contreparties s'affichent toujours au même endroit. En haut de la description du projet sur mobile et à droite de celle-ci sur les autres types d'écrans. 
</p>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Sur chaque contreparties est indiqué :
</p>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
-le montant du don à effectuer pour recevoir la contrepartie
<br/>
-la description de ce que vous recevez si vous choisissez cette contrepartie
<br/>
-la date à laquelle le créateur pense pouvoir vous livrer la contrepartie
<br/>
-le nombre de contributeur ayant déjà choisi cette contrepartie
<br/>
-le nombre de contreparties disponibles
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

export default SOneThree
