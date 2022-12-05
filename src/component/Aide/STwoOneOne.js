import React from 'react'

import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function STwoOneOne() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Comment suivre un projet ?</h1>
  <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Veuillez vous rendre sur la page du projet qui vous intéresse. 

Une fois arrivé sur la page, vous trouverez un bouton en forme de "coeur bleu".
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Il vous suffit de cliquer dessus afin de déclencher le suivi de cette page. Vous serez alors automatiquement alerté des nouvelles actualités. </p>
<br/>
<br/>

<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
   <Link to="/STwoOne"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
  </Link>
</div>
<div>


<Link to={"/STwoOneTwo"}> 
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

export default STwoOneOne
