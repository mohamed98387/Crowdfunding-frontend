import React from 'react'
import img48 from '../../images/img-48.jpg'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function PageFourOne() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img src={img48}  style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Comment obtenir une facture ou un reçu fiscal ?</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>En tant qu'Intermédiaire en Financement Participatif, KissKissBankBank n'est pas en capacité d'émettre un document de cette nature. C'est le créateur du projet, en tant que bénéficiaire de votre don, qui devra vous faire parvenir une facture ou un reçu fiscal s'il en a la capacité.
</p>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Si le projet est terminé et réussi et que vous n'avez rien reçu, 
<b>nous vous invitons à contacter le créateur du projet.</b>
</p>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}
>
Pour chaque contribution, KissKissBankBank met cependant à disposition un reçu de paiement téléchargeable depuis le détail de votre contribution.

Ce document vous permet ainsi d'attester de votre don dans vos écritures comptables
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



  <button style={{"marginLeft":"10px","width":"220px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px"}}>
  comment contacter un createur?
 </button>
 
  </div>
  </div>
   </div>
   </div>
  )
}

export default PageFourOne
