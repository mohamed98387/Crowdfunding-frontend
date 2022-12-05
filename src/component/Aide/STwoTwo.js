import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoTwo() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Comment contribuer de manière anonyme ?</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Vous avez la possibilité de participer à une campagne anonymement. 

</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Pour cela :

-sélectionnez le projet auquel vous voulez participer
<br/>
-sélectionnez la contrepartie de votre choix
<br/>
-cochez la case située en bas de votre écran Contribuer de manière anonyme.</p>
<br/>
<p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>
Puis-je rendre anonyme une contribution déjà effectuée ?

Il n'est pas encore possible d'effectuer cette action depuis votre compte mais nous pouvons effectuer cette modification à votre place.

Pour cela, merci de nous contacter en cliquant sur le bouton ci-dessous.
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

export default STwoTwo
