import React from 'react'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
function SOneFour() {
  return (
    <div >
    <div style={{"width":"1200px","height":"687px","marginLeft":"300px"}}>
    <h1 style={{"marginTop":"50px","marginLeft":"50px","width":"700px"}}>
    La propriété intellectuelle de votre projet KissKissBankBank
    </h1>
   <p style={{"marginTop":"50px","marginLeft":"50px","width":"650px"}}>
   Les contributions à votre projet sont des dons "désintéressés" et pas des investissements. Vous ne cédez donc pas de parts ou de droits aux personnes qui y contribuent. À condition que votre création soit une oeuvre originale dont vous êtes l'auteur, vous bénéficiez de la protection des droits d'auteurs.


</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
Concernant les éléments que vous publiez sur votre page projet, vérifiez que vous respectez bien les droits d'auteurs et que vous êtes en droit de les utiliser.
<br/>
<br/>
Si ce n'est pas le cas, vous disposez des solutions suivantes :
</p>
<br/>

<p style={{"marginLeft":"50px","width":"650px"}}>
<br/>
-obtenir la cession des droits d'auteur auprès du créateur de l'élément en question (solution payante)
</p>

<p style={{"marginLeft":"50px","width":"650px"}}>
<br/>
-obtenir une licence de reproduction / exploitation / diffusion auprès du créateur (solution payante ou gratuite)
</p>

<p style={{"marginLeft":"50px","width":"650px"}}>
<br/>
-obtenir une autorisation d'utiliser l'élément en question à titre gratuit auprès du créateur (solution gratuite). Dans l'hypothèse où vous auriez diffusé sur votre page projet des éléments de propriété intellectuelle appartenant à un tiers sans autorisation, nous serions obligés de retirer cet élément dès réception d'une requête en ce sens de la part du créateur de l'élément, qui s'avèrerait fondée.
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

export default SOneFour
