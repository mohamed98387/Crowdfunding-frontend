import React,{useState,useRef} from 'react'
import "./Description.css"
import {Link as LinkRoll} from "react-scroll"
import {connect} from "react-redux"
function Description(props) {
  const[selected,setSelected]=useState("one")
  const[hovered,sethovered]=useState(0)
  const[amountReward,setamountReward]=useState("")
  
  function handleClick() {
  
    textInput.focus();
 
    console.log(hovered)
  }
  function  handleChange(e){
		setamountReward({[e.target.name]: e.target.value })
	}
  function click() {
    
    sethovered(0)
    console.log(hovered)
  }
  const textInput = useRef(null);
const xx=null
  return (
    <div style={{"display":"flex"}}>
      <div className='nvdesc'>
        
        <h4 onClick={()=>setSelected("one")}  className='btnnvdesc'
         style={{"color":"grey","cursor":"pointer"}}>STORY</h4>
        <hr style={{"width":"90px","marginTop":"20px"}} />
    
        <h4  onClick={()=>setSelected("two")}  className='btnnvdesc'
      style={{"color":"grey","cursor":"pointer","marginTop":"20px"}}>RISKS</h4>

   
      </div>
      <div className='contdesc'>
        <div style={{"height":"2500px","marginTop":"20px" }} className='storydec'>
        {selected ==="one" ? 
        
        props.myproject.Presentation.map((obj, index) => (
    
    <div key={index} >
      <h3 style={{"height":"80px","marginLeft":"10px","width":"250px" ,'overflow': 'hidden'
    ,  "wordWrap" :"break-word"}}>{obj.descriptionPresentation}</h3>
     
     {obj.picturePresentation.map((obj, index) => (
    
    <div key={index} style={{"display":"flex"}}  >
     
     


     <img
           style={{  width: "550px", height: "350px" ,marginTop:'10px',borderRadius:'5px',
           marginLeft:"20px" }}
           src={`http://localhost:5000/${obj}`}
           alt={`eventImg=${index}`}
        />
      
  
       </div>
  

     ))}
  


    
      
  
       </div>
  

     ))
    :
    <div  className='risksddesc' style={{"height":"200px"}} >
      <p style={{"marginTop":"20px","width":"700px"}}> {props.myproject.Risks}</p>
  
</div>
    }
        </div>
        
       
      </div>
     
      <div className='rewarddesc'>

<div style={{"marginTop":"10px"}} >
         <h2>Support</h2>
        <div style={{"width":"330px","height":"400px",
        "border":"0.01px solid grey","marginTop":"10px","padding":"20px"}}>
<h3>Commitment without reward</h3>
<input 
 style={{"marginTop":"15px","height":"50px","width":"280px"}}
 type="text" placeholder='Amount of my commitment                     DT'></input>
 <div  className='ppp' style={{"width":"280px","height":"180px"
 ,"marginTop":"15px","padding":"20px"}}>
<h4>This project will not take off without you.</h4>
<p style={{"marginTop":"20px"}}>Support a project simply because it speaks to you, without choosing a reward.</p>

 </div>
 <button style={{"marginTop":"15px","height":"50px","width":"280px","backgroundColor":"#EA1A47"
,"border":"none","color":"white","fontSize":"20px"}}>
 Continue
 </button>
 
        </div>
        <div  className="rewardcard">
        {
        
        props.myproject.Reward.map((obj, index) => (
       
          <div 

    key={index} 
    style={{"width":"330px","height":"400px","marginTop":"10px","border":"0.2px solid grey","padding":"20px"}}>
<div  style={{"display":"block"}}>
<h3 >{obj.titleReward}</h3>
<p style={{"marginTop":"20px"}} >{obj.descriptionReward}</p>
<p style={{"backgroundColor":"rgb(221, 221, 221)"
,"marginTop":"20px","padding":"3px","width":"130px","paddingLeft":"10px","fontSize":"13.5px"}}>150 contributeur</p>

<p style={{"color":"grey","fontSize":"15px","marginTop":"10px"}}>Committed amount</p>
<input onChange={handleChange} name="amountReward"
 style={{"width":"300px","height":"40px"}}   type="text"  ref={textInput}></input>
 <button style={{"marginTop":"15px","height":"50px","width":"280px","backgroundColor":"#EA1A47"
,"border":"none","color":"white","fontSize":"20px"}}>
 Continue
 </button>
</div>

  



        </div>
        
    
        
        ))
        
        }
      </div>
     
</div>
      </div>
    </div>
  )
}
const MapStateToProps=state=>{
  return{
    myproject:state.project.saved,
    auth:state.auth
  }
}
export default connect(MapStateToProps,null)(Description)

