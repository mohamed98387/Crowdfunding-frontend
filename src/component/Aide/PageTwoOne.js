import React from 'react'
import {Link} from "react-router-dom"
import img48 from '../../images/img-48.jpg'
import { AiFillCaretLeft } from "react-icons/ai";
class PageTwoOne extends React.Component  {
    constructor(props){
		super(props);
		this.state = {
      select:{
        oui:false,
        non:false
      }
    
		}
	}
    handleChange=e=>{
let state = this.state
state.select[e.target.value]= e.target.checked
this.setState(state)
console.log(this.state.select)
	}
  redirect=()=>{
    if (this.state.select.oui === true){
      window.location.href = "http://localhost:3000/PageTwoTwo";
    }else if(  this.state.select.non === true){
    
      window.location.href = "http://localhost:3000/PageTwoThree";
    }
  }
    render(){
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
    <img src={img48} style={{"height":"590px","width":"700px","marginTop":"0px"
    ,"marginLeft":"0px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"50px","marginLeft":"50px"}}>Savoir si je peux lancer mon projet sur KissKissBankBank</h1>
  <h2 style={{"marginTop":"50px","marginLeft":"50px","width":"500px"}}>
  Avez-vous plus de 18 ans ou un tuteur majeur ?
</h2>


<div style={{"marginTop":"30px","marginLeft":"50px"}}>
    <div style={{"display":"flex"}}>
    <input value="oui"
      onChange={this.handleChange} name='select' type="checkbox" style={{"width":"20px"}}
      checked={this.state.select.sOne}></input>
    <h5 style={{"marginLeft":"20px"}}>oui</h5>
    </div>
    <div style={{"display":"flex","marginTop":"5px"}}>
    <input value="non"
  onChange={this.handleChange}  name='select'  type="checkbox" style={{"width":"20px"}}
  checked={this.state.select.sTwo}></input>
    <h5 style={{"marginLeft":"20px"}}>non je ne suis pas majeur et je ne suis pas de tuteur majeur</h5>
    </div>
  
   
    </div>
    <div style={{"display":"flex"}}>
    <div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
    <Link to="/Aide"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
   </Link>
</div>
<div>
  <button onClick={this.redirect} style={{"marginLeft":"10px","width":"170px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px"}}>
   suivant </button>
   </div>
   </div>
   </div>
   </div>
  )
}
}
export default PageTwoOne
