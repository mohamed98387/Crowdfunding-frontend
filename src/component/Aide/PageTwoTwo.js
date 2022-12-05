import React from 'react'
import img48 from '../../images/img-48.jpg'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function PageTwoTwo() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
    <img src={img48} style={{"height":"590px","width":"700px","marginTop":"0px"
    ,"marginLeft":"0px"}}></img>
   
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Quelle est la nature du projet ?</h1>
  <h3 style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>
  Votre projet présente-t-il une dimension créative, associative et/ou entrepreneuriale ?
</h3>
<br/>

<p style={{"marginLeft":"50px","width":"500px"}}>
<h4>À titre d'exemple, ne sont pas acceptés : </h4>
<br/>
-Les projets personnels ne possédant pas de dimension collective, par exemple : financez mes vacances, mon mariage, mes études...
<br/>
-Les projets à caractère raciste, xénophobe, violent, homophobe, diffamatoire, pédophile, incitant à la haine, au suicide, aux crimes de guerre...
<br/>
-Les projets de financement de campagne électorale
<br/>
-Les projets dont le contenu reproduit sans autorisation une œuvre protégée par la propriété intellectuelle
</p>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
    <Link to="/PageTwoOne"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
   </Link>
</div>
   </div>
   </div>
  )
}

export default PageTwoTwo
