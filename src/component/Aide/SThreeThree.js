import React from 'react'
import img52 from '../../images/img-52.png'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SThreeThree() {
  return (
    <div style={{"display":"flex"}}>
     <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
       <img src={img52}  style={{"height":"330px","width":"600px","marginTop":"120px"
    ,"marginLeft":"30px"}}></img>
     </div>
     <div style={{"width":"700px","height":"587px"}}>
   <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Votre projet est en Brouillon</h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>Félicitations, vous avez commencé la création de votre projet ! À ce stade, votre projet ne contient pas encore assez d'informations pour être relu par notre équipe.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}>
Pendant la préparation de votre projet, celui-ci n'est visible que par vous et il reste modifiable.
</p>
<br/>
<br/>
<p style={{"marginLeft":"50px","width":"500px"}}
>Vous devez maintenant compléter les éléments indiqués en orange. Cette étape est nécessaire pour pouvoir partager votre projet à votre coach, le faire accepter puis le mettre en ligne.
<br/>
Plus vous donnez d'informations, plus les conseils des coachs seront précis et la validation sera rapide. 
<br/>
L'état de votre projet est également visible dans votre gestionnaire de projet en haut à gauche.
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


<Link to={"/PageOneTwo"}> 
   <button style={{"marginLeft":"10px","width":"170px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px"}}>
    créer mon projet </button>
   </Link>
   </div>
   </div>
    </div>
    </div>
  )
}

export default SThreeThree
