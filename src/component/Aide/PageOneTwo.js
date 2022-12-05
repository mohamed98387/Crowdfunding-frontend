import React from 'react'
import {Link} from "react-router-dom"
import img43 from '../../images/img-43.png'
import { AiFillCaretLeft } from "react-icons/ai";

function PageOneTwo() {
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
 <img src={img43} style={{"height":"330px","width":"600px","marginTop":"120px"
    ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Pour créer un projet</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>1.Rendez-vous sur 
   notre page d'accueil et cliquez sur le lien
    Je lance mon projet en haut de votre écran.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
2.Puis, lorsque vous êtes prêt·e, cliquez sur Je lance mon projet pour démarrer la création de votre projet.
</p>

<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
    <Link to="/PageOneOne"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
   </Link>
</div>
<div>
<Link to={"/PageOneThree"}> 
   <button style={{"width":"270px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px","marginLeft":"10px"}}>
   je Decouvrir comment cree mon projet</button>
   </Link>
   </div>
   </div>
  
   </div>
   </div>
  )
}

export default PageOneTwo
