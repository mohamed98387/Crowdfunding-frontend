import React from 'react'

import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoOne() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>À quoi ça sert de suivre un projet ?</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Depuis votre compte, vous avez la possibilité d'activer des notifications pour suivre l'avancé d'un projet de votre choix.

Cette fonctionnalité vous permet de recevoir un email à chaque fois qu'une actualité est publiée par le créateur du projet mais également lorsque la campagne atteint son objectif ou se termine.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Les créateurs sont censés publier régulièrement des actualités pour informer leurs contributeurs de leurs avancées.  
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}
>Lorsque vous contribuez à un projet, vous êtes automatiquement abonné.e aux actualités du projet.
Cela vous permet de rester informé.e des avancées du projet de la livraison des contreparties.</p>
<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
   <Link to="/Aide"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
  </Link>
</div>
<div>


<Link to={"/STwoOneOne"}> 
  <button style={{"marginLeft":"10px","width":"170px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px"}}>
  suivant </button>
  </Link>
  </div>
  </div>
   </div>
   </div>
  )
}

export default STwoOne
