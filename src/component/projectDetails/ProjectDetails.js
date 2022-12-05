import React,{useEffect,useState}from 'react'
import "./projectDetails.css"
import VideoPlayer from "react-video-js-player"
import Car from "../../video/video.mp4"
import img9 from '../../images/img-9.jpg'
import { MdOutlineFavoriteBorder} from 'react-icons/md';
import { AiFillTwitterSquare}  from "react-icons/ai";
import { AiFillFacebook}  from "react-icons/ai";
import { BsLinkedin}  from "react-icons/bs";
import {connect} from "react-redux"
import { ImCompass2 } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import first from '../../../src/images/first.png'
import second from '../../../src/images/second.png'
import third from '../../../src/images/third.png'
import { FacebookButton, FacebookCount } from "react-social";
import { Button } from 'bootstrap'
import axios from "axios"
import  Description  from './pages/Description'
import FAQ from './pages/FAQ'
import  News from './pages/News'
import  Comments  from './pages/Comments'
import  Communaute  from './pages/Communaute'
import { HiInformationCircle } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { GrMoney } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";


function ProjectDetails(props) {
  const variable={
    userId:props.auth.user._id,
    projectId:props.myproject._id,
    Duration:props.myproject.Duration,
    Presentation:props.myproject.Presentation,
    Reward:props.myproject.Reward,
    date:props.myproject.date,
    dateLaunche:props.myproject.dateLaunche,
    location:props.myproject.location,
    objective:props.myproject.objective,
    smallDescription:props.myproject.smallDescription,
    subCategory:props.myproject.subCategory,
    video:props.myproject.video,
    title:props.myproject.title,
    picture:props.myproject.picture,
  category:props.myproject.category,
   
  }
  const projectvariable={
    
    projectId:props.myproject._id,
  
  }
  
 const[favoriteNumber,setfavoriteNumber] =useState(0)
 const[favorited,setfavorited] =useState(false)
 const[selected,setSelected]=useState("one")
 const[selectedinfo,setSelectedinfo]=useState("one")
 const[CommentLists,setCommentLists]=useState([])
 const[QuestionLists,setQuestionLists]=useState([])
 const updateComment =(newComment)=>{
  setCommentLists(CommentLists.concat(newComment))
 }
 const updateQuestion =(newQuestion)=>{
  setQuestionLists(QuestionLists.concat(newQuestion))
 }
  useEffect(()=>{

   axios.post("/api/comment/getComments", projectvariable).then((response) => {
      if (response.data.success) {
        console.log(response.data.comments)
        setCommentLists(response.data.comments)
      }else{
        alert('failed to get comments')
    
      }
    });
    axios.post("/api/favorite/favoriteNumber", variable).then((response) => {
      if (response.data.success) {
        
        setfavoriteNumber(response.data.favoriteNumber)
      }else{
      //  alert('failed to get favoriteNumber')
        console.log(response)
      }
    });
    axios.post("/api/favorite/favorited", variable).then((response) => {
      if (response.data.success) {
        
        setfavorited(response.data.favorited)
      }else{
    //    alert('failed to get favorite Info')
      }
    });


    },[])

  const videoSrc = Car;
  const poster = img9;
  let url = "http://localhost:3000/projectDetails";
 const onClickfavorite =()=>{
if(favorited){

  axios.post("/api/favorite/removeFromFavorite", variable)
  .then(response=>{
    if(response.data.success){
      setfavoriteNumber(favoriteNumber - 1)
      setfavorited(!favorited)
    }else{
      alert('failed to remove favorite')
    }
  })
}else{
  axios.post("/api/favorite/addToFavorite", variable)
  .then(response=>{
    if(response.data.success){
      setfavoriteNumber(favoriteNumber + 1)
      setfavorited(!favorited)
    }else{
      alert('failed to add favorite')
      console.log(response)
    }
  })
}
 }
  return (
    <div>
    <div className='projectDetails'>
      <div className='projectTitledescription'>
      <h1 className='projectTitle'>{props.myproject.title}</h1>
     
      <h4 className='smallDescription'>{props.myproject.smallDescription}</h4>
      </div>
    
      <div className='middleContainer'>
      <video
 src={ props.myproject.video}
 style={{"height":"420px","width":"720px","marginLeft":"20px"}}
 controls
 >  </video> 
    
        <div className='someDeatils'> 
        <div className='progresse-line-project-details'><span></span></div>
        <div className='amount'> 1900DT</div>
        <h4 className='objectif' >committed to an objective of {props.myproject.objective} DT</h4>
        <div className='nbcontributeurs'>195</div>
        <div className='objectif'>contributors</div>
        <div className='nbcontributeurs'>{props.myproject.Duration}</div>
        <div className='objectif'>days before the end</div>
        <button className="btn--outline-detail-project" onClick={()=>console.log(videoSrc)}> I support this project
</button>
<div className="btns">

{ props.auth.token === null ?
<div></div>:
<button  style={{"marginTop":"10px","height":"40px","padding":"5px","border":"0.5px solid grey"
,"cursor":"pointer","borderRadius":"15px"}}
className={favorited ? "btnfavone":"btnfavtwo"}
onClick={onClickfavorite} >{favorited ? "remove from favorite":"Add to Favorite"} {favoriteNumber}</button>


}



<FacebookButton style={{"backgroundColor":"white","border":"none"}} url={url} appId={824129132080014}>
   
        <AiFillFacebook color='blue'  className="favoris" />
      </FacebookButton>
<AiFillTwitterSquare color='rgb(0, 153, 255)'  className="favoris" />

</div>
        </div>
      </div>
      <div style={{"marginLeft":"20px" ,"display":"flex"}}>
      <ImCompass2 style={{"marginTop":"2px"}} size={20} />
      <p style={{"marginLeft":"2px"}}>{props.myproject.category} </p>
      <ImLocation style={{"marginTop":"2px"}} size={20} />
      <p style={{"marginLeft":"2px"}}>{props.myproject.location} </p>
       <HiInformationCircle onClick={()=>setSelectedinfo("two")} size={25}
        style={{"marginLeft":"5px","color":"EA1A47","cursor":"pointer"}}/>

      </div>
   { selectedinfo === "two" ?
      <div style={{"height":"150px","backgroundColor":"rgb(247, 244, 244)","marginTop":"15px","display":"flex"}}>
        <div style={{"display":"flex","width":"600px"}}>
 
       <GrMoney color='yellow' size={100} style={{"height":"50px","marginLeft":"10px","marginTop":"38px"}}/>
       <h4 style={{"marginTop":"30px","width":"300px","marginTop":"40px"}}>contrast brings together the creator and his contributors around the financing of a project.</h4>
       </div>
       <div style={{"display":"flex","width":"600px"}}>
       <AiOutlineMessage size={100} style={{"height":"50px","marginLeft":"10px","marginTop":"38px","color":"#EA1A47"}}/>
       <h4 style={{"marginTop":"40px",marginLeft:"10px"}}>Rewards are not guaranteed, but the creator agrees to inform its contributors regularly.</h4>
       </div>
       <div style={{"display":"flex","width":"600px"}}>
     
       <FaHandsHelping color='blue'  size={50} style={{"height":"50px","marginTop":"38px"}} />
       <h4 style={{"marginTop":"30px","marginLeft":"10px","width":"320px","marginTop":"40px"}}>contrast brings together the creator and his contributors around the financing of a project.</h4>
       </div>
      </div>
      :
      <div style={{"height":"0px"}}></div>
}
   </div>
     <div style={{"marginTop":"127px","backgroundColor":"white"}}>

   
   <div className='navdetails' >

   <button className='btndetails' style={{"marginLeft":"110px","height":"58px","marginTop":"10px","width":"80px","backgroundColor":"white"
  ,"cursor":"pointer","backgroundColor":"white"}} onClick={()=>setSelected("one")}>
    Descriptions</button>
<button  className='btndetails' style={{"marginLeft":"10px","height":"58px","marginTop":"10px","width":"80px","backgroundColor":"white"
,"cursor":"pointer","backgroundColor":"white"}} onClick={()=>setSelected("two")}>
  FAQ</button>
<button  className='btndetails' style={{"marginLeft":"10px","height":"58px","marginTop":"10px","width":"80px","backgroundColor":"white"
,"cursor":"pointer"}} onClick={()=>setSelected("three")}>
  News</button>
<button  className='btndetails' style={{"marginLeft":"10px","height":"58px","marginTop":"10px","width":"80px","backgroundColor":"white"
,"cursor":"pointer"}} onClick={()=>setSelected("four")}>
   Comments</button>
<button  className='btndetails' style={{"marginLeft":"10px","height":"58px","marginTop":"10px","width":"80px","backgroundColor":"white"
,"cursor":"pointer"}} onClick={()=>setSelected("five")}>
  Community</button>

   </div>
   <div className='descriptionDetails' >
    
{ selected==='one' ?
<Description />
: selected==='two' ?
<FAQ QuestionLists={QuestionLists} refreshFunction={updateQuestion} />
:  selected==='three' ?
<News />
:  selected==='four' ?
<Comments CommentLists={CommentLists} refreshFunction={updateComment} />
:  selected==='five' ?
<Communaute />
:
<div></div>


}

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
export default connect(MapStateToProps,null)(ProjectDetails)




