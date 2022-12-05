import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import img40 from "../../images/img-41.png"
import "./EditProject.css"
import axios from "axios"
import { FcUpload } from "react-icons/fc";
import {editProject} from "../../actions/ProjectActions"
import VideoPlayer from "react-video-js-player"
import ReactPlayer from 'react-video-js-player';
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";

class EditProject extends React.Component {

  componentDidMount = () => {
 
 //   console.log(this.props)
  //  console.log(this.state)
  }
  constructor(props){
		super(props);
		this.state = {
      
      title:this.props.saved.title,
      smallDescription:this.props.saved.smallDescription,
			isActivetwo:false,
      isActivethree:false,
      isActivefour:false,
      location:this.props.saved.location,
      category:this.props.saved.category,
      subCategory:this.props.saved.subCategory,
      date:this.props.saved.date,
      Duration:this.props.saved.Duration,
      objective:this.props.saved.objective,
      dateLaunche:this.props.saved.dateLaunche,
      file:null,
      fileVideo:null,
      fileVideoPresentation:null,
      video:this.props.saved.video,
      videoPresentation:null,
      active:false,
      picture:this.props.saved.picture,
      picturePresentation:[],
      descriptionPresentation:"",
      Presentation:[{}]
		}
	}
   onDelete = (image) => {
    const currentIndex = this.state.picturePresentation.indexOf(image);
    let newImages = [...this.state.picturePresentation];
    newImages.splice(currentIndex, 1);
    this.setState({picturePresentation :newImages});
 
  };
  onDeleteVideo = (image) => {
    const currentIndex = this.state.videoPresentation.indexOf(image);
    let newImages = [...this.state.videoPresentation];
    newImages.splice(currentIndex, 1);
    this.setState({videoPresentation :newImages});
 
  };
 
  addPresentation = (newPresentation) => {
 
    axios.put(`/api/project/presentation/${this.props.saved._id}`,newPresentation  ).then((res) => {
        console.log(res)
      if (res.data.success) {
        alert('newPresentation added')
      }else{
       // console.log(res.data)
        console.log(newPresentation)
       // console.log(this.props.saved._id)
      }
    });
  };  
  upload = (e)=>{

    let formDataa = new FormData();
       const config = {
         header: { "content-type": "multipart/form-data" },
       };
       formDataa.append("file", this.state.file);
    
   
       //save the Image we chose inside the node server
       axios.post("/api/user/uploadImage", formDataa, config).then((response) => {
         if (response.data.success) {
         
          this.setState({
          picturePresentation: [...this.state.picturePresentation, response.data.path]
          })
        
          
      //     console.log(response.data.path)
         
         } else {
           alert("failed to save the image in server");
           console.log(response.data)
         }
       }).catch((err)=>{
         console.log('err',err)
       })
   
   }
   uploadtwo = (e)=>{
    console.log(this.state.file)
    console.log(this.state)
      let formDataa = new FormData();
         const config = {
           header: { "content-type": "multipart/form-data" },
         };
         formDataa.append("file", this.state.file);
      
     
         //save the Image we chose inside the node server
         axios.post("/api/user/uploadImage", formDataa, config).then((response) => {
           if (response.data.success) {
             this.setState({picture:response.data.path});
          //   console.log(response.data.path)
           
           } else {
             alert("failed to save the image in server");
             console.log(response.data)
           }
         }).catch((err)=>{
           console.log('err',err)
         })
     
     }
        uploadthree = (e)=>{
    console.log(this.state.file)
    console.log(this.state)
      let formDataa = new FormData();
         const config = {
           header: { "content-type": "multipart/form-data" },
         };
         formDataa.append("file", this.state.fileVideo);
      
     
         //save the Image we chose inside the node server
         axios.post("/api/user/uploadVideo", formDataa, config).then((response) => {
           if (response.data.success) {
             this.setState({video:response.data.path});
             console.log(response.data.path)
             console.log(response)
             console.log(this.state.video)
           } else {
             alert("failed to save the video in server");
             console.log(response.data)
           }
         }).catch((err)=>{
           console.log('err',err)
         })
     
     }
     uploadfour = (e)=>{
      console.log(this.state.file)
      console.log(this.state)
        let formDataa = new FormData();
           const config = {
             header: { "content-type": "multipart/form-data" },
           };
           formDataa.append("file", this.state.fileVideoPresentation);
        
       
           //save the Image we chose inside the node server
           axios.post("/api/user/uploadVideo", formDataa, config).then((response) => {
             if (response.data.success) {
               this.setState({videoPresentation:response.data.path});
               console.log(response.data.path)
               console.log(response)
               console.log(this.state.videoPresentation)
             } else {
               alert("failed to save the video in server");
               console.log(response.data)
             }
           }).catch((err)=>{
             console.log('err',err)
           })
       
       }
  handleChange=e=>{
		this.setState({[e.target.name]: e.target.value })
	}
  handleChangetwo=e=>{
    this.setState({[e.target.name]:e.trget.value})
  }
  handleChangethree=e=>{
		this.setState({[e.target.name]: e.target.value })
	}
  add=e=>{
  let obj= this.state.Presentation.descriptionPresentation;
 let objtwo= this.state.Presentation.picturePresentation;
 let objc ={'descriptionPresentation':obj,"picturePresentation":objtwo}
 let arr = this.state.Presentation.concat(objc)
 this.setState(arr)
  
  }

render(){
  const _id=this.props.saved._id;
  const title=this.state.title;
  
  const smallDescription=this.state.smallDescription;
  const location=this.state.location;
  const category=this.state.category;
  const subCategory=this.state.subCategory;
  const objective=this.state.objective;
  const picture=this.state.picture;
  
  const video=this.state.video;
  const Duration=this.state.Duration;
  const dateLaunche=this.state.dateLaunche;
  const Presentation=this.state.Presentation;
  const descriptionPresentation=this.state.descriptionPresentation;
  const picturePresentation=this.state.picturePresentation;
  const videoPresentation=this.state.videoPresentation;

  
  const newPresentation={
    "Presentation": {
      "descriptionPresentation": descriptionPresentation,
    "picturePresentation":picturePresentation,
    "videoPresentation":videoPresentation
  }
   }
  const updatedProject={_id,title,location,category,subCategory,objective,dateLaunche,Duration,picture
  ,smallDescription,video}
  const optionstwo = ["Denmark", "France", "Tunisie","Canada","Germany","America","Italy","England"];
  const Category= ["Art", "Artisanat", "Musique","Cinema et video","jeux", "design","Edition","Theatre"];
  const subcategoryone = ["concept art", "digital art", "public art","video art"];
  const subcategorytwo = ["candles", "borderry", "bedspreads","hook"];
  const subcategorythree = ["Rock", "hip hop", "jazz","classical music"];
  const subcategoryfour = ["Action", "romantic", "comedy","family"];
  const subcategoryfive= ["card games", "video games", "live games","mobile games"];
  const subcategorysix= ["architecture", "citizen design", "graphics","typography"];
  const subcategoryseven = ["anthologies", "zines", "art books","fiction"];
  const subcategoryeight = ["comedy", "experimental", "festivals","immersion"];
  return (
    <React.Fragment>
    
    <section style={{"display":"flex"}}>
    <div style={{"backgroundColor":"black","width":"220px","height":"5800px"}}>
        <Sidebar />
       </div>
    <div className='container-dashboard-project-edit'>
     
       <div className='content-project-dashboard-editproject'>
        <div className='content-settings'>

      <h1 style={{"fontSize":"30px"}}>
      Your project settings
      </h1>
      <h5 className="info-edit">Choose a clear title to help your audience understand your project quickly,it will be visible on your pre-launch and project page.</h5>
      <h5 className="info-edit">  Enter the geographic location that best matches your project.</h5>
    
      <div className='sectionOneedit'>
        <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
       <h3>Title project</h3>
      
       <input name='title' value={title}  onChange={this.handleChange} style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
    ,"borderRadius":"5px","border":"0.1px solid grey","height":"45px"}}></input>
    <h3>Small Description</h3>
      
      <input name='smallDescription' value={smallDescription}  onChange={this.handleChangethree} style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
   ,"borderRadius":"5px","border":"0.1px solid grey","height":"45px"}}></input>

<div style={{"marginTop":"10px"}} >
<h3>Location</h3>

    <div className="dropdown-content-ftwo">
    <div className="dropdown-ftwo-edit">
    <div className="dropdown-btn-ftwo-edit"
     onClick={(e) => this.setState({isActivetwo:!this.state.isActivetwo})
   
   }>
        {this.state.location}
        <span className="fas fa-caret-down"></span>
      </div>
    {this.state.isActivetwo && (
        <div className="dropdown-content-ftwo-edit">
          {optionstwo.map((option) => (
            <div 
              onClick={(e) => {
         
                this.setState({location:option});
                this.setState({isActivetwo:false});
              }}
              className="dropdown-item-ftwo-edit"
            >
             {option}
            </div>
          ))}
        </div>
      )}
        </div>
        </div>
        </div>
      </div>
      </div>



{/*sectiontwo*/}
<h1 style={{"fontSize":"30px","marginTop":"30px"}}>
     Categorie
      </h1>
     
      <h5 className="info-edit"> The main category and subcategory allow your contributors to find your project.</h5>
      <h5 className="info-edit">  These values can be changed at any time before and during your campaign.</h5>

 <div className='sectionOneedit'>
        <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
        <div style={{"marginTop":"10px"}} >
<h3>categorie</h3>

    <div className="dropdown-content-ftwo-edit">
    <div className="dropdown-ftwo-edit">
    <div className="dropdown-btn-ftwo-edit" onClick={(e) => {
      this.setState({isActivethree:!this.state.isActivethree});
      this.setState({subCategory:"choose one"})
    }
    }>
        {this.state.category}
        <span className="fas fa-caret-down"></span>
      </div>
    {this.state.isActivethree && (
        <div className="dropdown-content-ftwo-edit-categorie">
          {Category.map((option) => (
            <div 
              onClick={(e) => {
         
                this.setState({category:option});
                this.setState({isActivethree:false});
              }}
              className="dropdown-item-ftwo-edit"
            >
             {option}
            </div>
          ))}
        </div>
      )}
        </div>
        </div>
        </div>


<div style={{"marginTop":"50px"}} >
<h3>subCategorie</h3>

    <div className="dropdown-content-ftwo" >
    <div className="dropdown-ftwo-edit">
    <div className="dropdown-btn-ftwo-edit" onClick={(e) => this.setState({isActivefour:!this.state.isActivefour})}>
        {this.state.subCategory}
        <span className="fas fa-caret-down"></span>
      </div>
    {this.state.isActivefour && (
        <div className="dropdown-content-ftwo-edit">
                  {
         (category==="Art") ? 
         subcategoryone.map((option) => (
            <div 
              onClick={(e) => {
                console.log(  subCategory)
                this.setState({subCategory:option});
                this.setState({isActivefour:false});
              }}
              className="dropdown-item"
            >
             {option}
            </div>
          ))
         :   (category==="Artisanat") ?
         subcategorytwo.map((option) => (
          <div 
            onClick={(e) => {
              this.setState({subCategory:option});
              this.setState({isActivefour:false});
            }}
            className="dropdown-item"
          >
           {option}
          </div>
        ))
        
        :   (category==="Sport") ?
        subcategorythree.map((option) => (
         <div 
           onClick={(e) => {
            this.setState({subCategory:option});
            this.setState({isActivefour:false});
           }}
           className="dropdown-item"
         >
          {option}
         </div>
       ))
       : (category==="Cinema et video") ?
       subcategoryfour.map((option) => (
        <div 
          onClick={(e) => {
            this.setState({subCategory:option});
            this.setState({isActivefour:false});
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      : (category==="jeux") ?
      subcategoryfive.map((option) => (
        <div 
          onClick={(e) => {
            this.setState({subCategory:option});
            this.setState({isActivefour:false});
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      : (category==="design") ?
      subcategorysix.map((option) => (
        <div 
          onClick={(e) => {
            this.setState({subCategory:option});
            this.setState({isActivefour:false});
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      : (
        category==="Edition") ?
      subcategoryseven.map((option) => (
        <div 
          onClick={(e) => {
            this.setState({subCategory:option});
            this.setState({isActivefour:false});
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))
      :
      subcategoryeight.map((option) => (
        <div 
          onClick={(e) => {
            this.setState({subCategory:option});
            this.setState({isActivefour:false});
          }}
          className="dropdown-item"
        >
         {option}
        </div>
      ))

          }
   
        </div>
      )}
        </div>
        </div>
        </div>
      </div>
      </div>





{/*sectionthree*/}
<h1 style={{"fontSize":"30px","marginTop":"30px"}}>
My fundraising goal
      </h1>
      <h5 className="info-edit">  Set an achievable goal that covers everything you need to complete your project.
Funding is based on the “all or nothing” principle. If you don't reach your goal, you get nothing.</h5>
 <div className='sectionThreeedit'>
 <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
 <h3>Goal amount</h3>
       <input name="objective" value={objective} onChange={this.handleChange} style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
    ,"borderRadius":"5px","border":"0.1px solid grey","height":"45px"}} placeholder="                                            DT"></input>
      </div>
</div>



{/*sectionthree*/}
<h1 style={{"fontSize":"30px","marginTop":"30px"}}>
Target launch date
      </h1>
      <h5 className="info-edit"> You will receive guidance as to when stages that take several days to complete. This date remains modifiable until the moment when you launch your project .</h5>
 <div className='sectionThreeedit'>
 <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
 <h3>Date</h3>
    <input   style={{'width':"220px","marginTop":"10px"}}
    type="date"
value={dateLaunche}
     onClick={console.log(this.state.date)} onChange={(e)=>this.setState({dateLaunche:e.target.value})}></input>  
      </div>
</div>

{/*sectionfour*/}
<h1 style={{"fontSize":"30px","marginTop":"30px"}}>
Duration of collection
      </h1>
      <h5 className="info-edit"> Set the duration of your campaign. Once your project is launched, this parameter will no longer be modifiable.</h5>
 <div className='sectionThreeedit'>
 <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
 <h3>Current duration of your campaign</h3>
 <input value={Duration} style={{"width":"500px","height":"50px"}} type="range" onChange={(e)=>this.setState({Duration:e.target.value})}></input>

<h1>{this.state.Duration} days</h1>
      </div>
</div>




{/*sectionfive*/}
<h1 style={{'marginTop':"10px"}}>Picture</h1>
<h5 className="info-edit"> Add an image that clearly represents your project. Choose an image that will withstand being resized. It will be visible on your project page, on the Kickstarter site and mobile apps, and on social media.</h5>

<div className='sectionThreeedit' style={{"height":"400px"}}>
 <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
 <h3>Background picture</h3>
 <div style={{"display":"flex"}}>
   
        <label className='xxx' style={{"display":"flex"}} >
        <input className='file'
  type="file" 
       name='file'
       onChange={(e)=>this.setState({file:e.target.files[0]})} 
      >
       
        </input>

        <i class="fas fa-upload"></i> <h4 style={{"marginLeft":"10px"}}>choose a picture</h4>
        
        </label> 
   
        </div>
        <button
       style={{"backgroundColor":"blue","borderRadius":"5px","marginTop":"15px"
      ,"marginLeft":"220px","border":"none","padding":"5px","cursor":"pointer"}} 
      onClick={this.uploadtwo}
       >upload</button>

      </div>
      {this.state.picture !== null ?
        <img className='pictureproject'
              style={{  width: "400px", height: "210px" ,marginLeft:'40px',marginTop:'10px',borderRadius:'5px',
            marginLeft:"100px"}}
              src={`http://localhost:5000/${this.state.picture}` }
             
            />
            :
            <div></div>

      }
      
</div>



{/*section7*/}
<h1 style={{'marginTop':"10px"}}> Video</h1>
<h5 className="info-edit">  Add a video that illustrates your project.
Talk to your audience about what you want financially, how you plan to go about it, who you are, and why you care about this project.</h5>
<div className='sectionThreeedit' style={{"height":"400px"}}>
 <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
 <h3>Presentation</h3>
 <div style={{"display":"flex"}}>
   
        <label className='xxx' style={{"display":"flex"}} >
        <input className='file'
  type="file" 
       name='file'
       onChange={(e)=>this.setState({fileVideo:e.target.files[0]})} 
      >
       
        </input>
        <i class="fas fa-upload"></i> <h4 style={{"marginLeft":"10px"}}>choose a video</h4>
        </label> 
        </div>
        <div>
        <button
       style={{"backgroundColor":"blue","borderRadius":"5px","marginTop":"15px"
      ,"marginLeft":"220px","border":"none","padding":"5px","cursor":"pointer"}} 
      onClick={this.uploadthree}
       >upload video</button>
       </div>
       {this.state.video !== null ?  
 <video
 src={ this.state.video}
 style={{"marginTop":"20px","height":"200px","width":"400px","marginLeft":"50px"}}
 controls
 >  </video> 
 :
 <div></div>
       }

       
       
     
      </div>
</div>

{/*sections6*/}
<h1 style={{"fontSize":"30px","marginTop":"30px"}}>
The presentation of your project
      </h1>
      <h5 className="info-edit"> 
      What will make your audience want to gather around your project? Here, clarity, conciseness and precision are essential.
      Describe what you want financially by mentioning the importance that your project has in your eyes and how you intend to achieve it. Also tell a little about yourself. A complete description informs contributors about your entire project. If possible, add images to show off your work and the rewards you plan to produce.</h5>
 <div className='sectionsixedit' style={{"height":"1300px","width":"950px"}}>
 

    
       <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
      <h3>description</h3>
      <div style={{"display":"flex"}}>
       <input name="descriptionPresentation"  type="text" placeholder='describe your project as if you were talking to a friend'
       style={{"marginTop":"10px","backgroundColor":"white","borderRadius":"5px","border":"0.1px solid grey"
       ,"width":"750px","height":"200px"}}
       onChange={this.handleChange}
       >
       </input>
       <button style={{"height":"50px","marginLeft":"10px","marginTop":"80px","width":"100px"
       ,"backgroundColor":"blue","borderRadius":"5px","border":"none","color":"white","cursor":"pointer"}}
            onClick={()=>{this.addPresentation(newPresentation)
              alert('project adedd')}
            }
            >add Presentation</button>
    </div>
       <div style={{"display":"flex"}}>
       
        <label className='xxxx' style={{"display":"flex","marginLeft":"180px"}} >
        <input className='file'
  type="file" 
       name='file'
       onChange={(e)=>this.setState({file:e.target.files[0]})} 
      >
       
        </input>
        <i class="fas fa-upload"></i> <h4 style={{"marginLeft":"10px"}}>choose a picture <picture></picture></h4>
        </label>
        <label className='xxxx' style={{"display":"flex","marginLeft":"40px"}} >
        <input className='file'
  type="file" 
       name='file'
       onChange={(e)=>this.setState({fileVideoPresentation:e.target.files[0]})} 
      >
       
        </input>
        <i class="fas fa-upload"></i> <h4 style={{"marginLeft":"10px"}}>choose a video <picture></picture></h4>
        </label>
       </div>
       <div>
       <button
       style={{"backgroundColor":"blue","borderRadius":"5px","marginTop":"15px"
      ,"marginLeft":"235px","border":"none","padding":"5px","cursor":"pointer"
    ,"color":"white"}} 
      onClick={this.upload}
       >upload Picture</button>
          <button
       style={{"backgroundColor":"blue","borderRadius":"5px","marginTop":"15px"
      ,"marginLeft":"145px","border":"none","padding":"5px","cursor":"pointer"
    ,"color":"white"}} 
      onClick={this.uploadfour}
       >upload Video</button>
       </div>
    {/*      <img className='pictureproject'
              style={{  width: "250px", height: "170px" ,marginTop:'20px',borderRadius:'5px',
            marginLeft:"10px"}}
              src={this.state.Presentation[0].picturePresentation === null ? img40 : `http://localhost:5000/${this.state.Presentation[0].picturePresentation}`}
             
            />
*/}    {/*  <div key={index} onClick={() => onDelete(image)}>*/} 
<div style={{"display":"flex"}}  >
{
            this.state.videoPresentation !== null ? 
            <div   style={{"marginTop":"20px","height":"230px","width":"280px" ,"padding":"10px","borderRadius":"5px"
            ,"marginLeft":"8px","display":"flex"
          ,"backgroundColor":"rgb(241, 241, 241)","boxShadow": " 1px 1px 8px 3px #999999"}}>
            <video
      src={ this.state.videoPresentation}
    style={{"height":'200px',"width":"240px",marginTop:"10px"}}
      controls
      ></video>
       <TiDelete size={20} color='red'  style={{"cursor":"pointer"}} onClick={() => {this.onDeleteVideo(this.state.videoPresentation)
          console.log(this.state.videoPresentation)}} />
      </div>
            
            :
            <div> </div>
 
  }
   {this.state.picturePresentation.map((image, index) => (
     
       <div style={{"display":"flex","marginTop":"20px","height":"230px","width":"250px" ,"padding":"10px","borderRadius":"5px"
    ,"marginLeft":"10px"
       ,"backgroundColor":"rgb(241, 241, 241)","boxShadow": " 1px 1px 8px 3px #999999"}} key={index} >
     
            <img
              style={{  width: "200px", height: "200px",marginTop:"10px",borderRadius:'5px',
              marginLeft:"10px"}}
              src={`http://localhost:5000/${image}`}
              alt={`eventImg=${index}`}
            />
             <TiDelete color='red' size={30} style={{"cursor":"pointer"}} onClick={() => {this.onDelete(image)
        console.log(image)}} />
          </div>
        ))}
  
</div>
<h1 style={{"marginLeft":"230px","marginTop":"40px","marginBottom":"20px"
,"fontSize":"35px"}}>Your Presentations</h1>
<div style={{"height":"530px","padding":"2px","overflowY":"auto"}}>
      <div style={{"display":"flex","flexWrap":"wrap"}}>
     
        {this.props.saved.Presentation.map((obj, index) => (
    
    <div style={{"marginTop":"10px","width":"280px","height":"250px",
    "backgroundColor":"rgb(241, 241, 241)","marginLeft":"5px","borderRadius":"5px"
    , "boxShadow": " 1px 1px 8px 3px #888888","padding":"2px"}} key={index} >
      <h3 style={{"height":"80px","marginLeft":"10px","width":"250px" ,'overflow': 'hidden'
    ,  "wordWrap" :"break-word"}}>{obj.descriptionPresentation}</h3>
     
  

<img
           style={{  width: "250px", height: "150px" ,marginTop:'10px',borderRadius:'5px',
           marginLeft:"10px"}}
           src={`http://localhost:5000/${obj.picturePresentation[0]}`}
           alt={`eventImg=${index}`}
        />
    
      
  
          <AiFillEdit color='blue' />
       </div>
  

     ))}

</div>

</div> 
       
          
     </div>
  
 {/*   {this.state.active ? <div> edit</div> : <div></div> }  */}

</div>

<Link to="/editprojecttwo">
<button className='btn-sv' onClick={()=>{this.props.editProject(updatedProject)
alert('project updated')
}} style={{"width":"150px","height":"50px","marginTop":"10px","marginLeft":"800px"
,"backgroundColor":"#31a3d8","border":"none","borderRadius":"5px","cursor":"pointer"
}}>Save and go to next</button>
</Link>





       </div> 
       </div>
     
    </div>
    </section>
    
    </React.Fragment>
  
  )


}
  
}
const MapStateToProps=state=>{
  return{
    saved:state.project.saved
  }
}
const MapDispatchToProps=dispatch=>{
  return{
    editProject:()=>editProject()
   
  }
}
export default connect(MapStateToProps,{editProject})(EditProject)