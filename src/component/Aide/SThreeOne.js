import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
import img51 from '../../images/img-51.png'
function SThreeOne() {
  return (
    <div style={{"display":"flex"}}>
     <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
       <img  src={img51} style={{"height":"330px","width":"600px","marginTop":"120px"
    ,"marginLeft":"30px"}}></img>
     </div>
     <div style={{"width":"700px","height":"587px"}}>
   <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Votre communauté</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Nous vous encourageons à indiquer les liens des pages sur lesquelles vous êtes suivis pour votre projet.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Un lien vers chacune des pages que vous aurez ajoutée sera proposé sur votre page projet.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}
>L'inscription et la création de projet est gratuite. Nous prélevons un pourcentage de 5% (+3% de frais bancaires, soit 8%TTC) à la fin de la collecte, uniquement si celle-ci atteint son objectif.</p>
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

export default SThreeOne
