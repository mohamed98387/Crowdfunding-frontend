import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SOneOne() {
  return (
    <div >
    <div style={{"width":"1200px","height":"687px","marginLeft":"350px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Contrast, c'est quoi ?</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"650px"}}>
   Contrast est une plateforme de financement participatif qui permet aux projets créatifs, innovants, solidaires et entrepreuneuriaux de collecter des fonds sous forme de don auprès de leur communauté et du grand public. En échange des dons, les créateurs offrent généralement des contreparties ou des abonnements aux donateurs. 

</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
<b>Nos services</b>
<br/>
Nous proposons aux créateurs de les aider à réaliser leurs projets en leur permettant de collecter des dons en ligne et en leur proposant un coaching personnalisé lors de campagnes de dons ponctuelles ou permanentes.
</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
<b>Nos valeurs</b>
<br/>
Notre équipe de 40 personnes basée à Paris place l'humain et l'accompagnement au coeur de chaque campagne. Lancer votre projet avec nous signifie aussi que vous bénéficierez de l'expérience et du professionnalisme de cette équipe qui depuis 2009 a participé à la réussite de plusieurs milliers de projets.
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
<Link to={"/"}> 
   <button style={{"width":"270px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px","marginLeft":"10px"}}>
 let's discover</button>
   </Link>
   </div>
   </div>
  
   </div>
   </div>
  )
}

export default SOneOne
