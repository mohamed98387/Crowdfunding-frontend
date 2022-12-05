import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SThreeTwo() {
  return (
    <div style={{"display":"flex"}}>
     <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
       <img style={{"height":"330px","width":"600px","marginTop":"120px"
    ,"marginLeft":"30px"}}></img>
     </div>
     <div style={{"width":"700px","height":"587px"}}>
   <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Partager un aperçu de mon projet</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Pour partager votre projet à vos proches afin qu'ils vous donnent leur avis sur sa présentation, vous devez leur partager un lien spécifique que vous trouverez tout en haut de votre projet page, dans l'encart Gérer mon projet.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Une fois sur votre page projet, Cochez Activer le lien de prévisualisation, cliquez sur le bouton Copier et collez le lien dans le message que vous voulez envoyer aux personnes à qui vous souhaitez donner un accès à votre page.</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}
>N'oubliez pas que vous devez vous connecter à votre compte créateur avant de vous rendre sur votre page.</p>
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

export default SThreeTwo
