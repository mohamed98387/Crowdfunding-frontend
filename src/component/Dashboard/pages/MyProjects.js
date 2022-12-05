import React from 'react'
import Sidebar from '../Sidebar'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {editProject, getProject,saveProject} from "../../../actions/ProjectActions"
import { AiOutlineEye } from "react-icons/ai";
import "./MyProject.css"
import img1 from '../../../images/img-1.jpg'
import img2 from '../../../images/img-2.jpg'
import img3 from '../../../images/img-3.jpg'
import img4 from '../../../images/img-4.jpg'
import img5 from '../../../images/img-5.jpg'
import img6 from '../../../images/img-6.jpg'
import img7 from '../../../images/img-7.jpg'
import img8 from '../../../images/img-8.jpg'
import img9 from '../../../images/img-9.jpg'
import img10 from '../../../images/img-10.jpeg'
import img11 from '../../../images/img-11.jpeg'
import img12 from '../../../images/img-12.jpeg'
import img38 from '../../../images/img-40.jpg'
class MyProjects extends React.Component {
  componentDidMount = () => {
    this.props.getProject()
    console.log(  this.props)
    console.log( this.props.myproject.project)
    
  }
  
render(){
const  slides = 
  this.props.myproject.project
   ;
  return (
    <React.Fragment>
    
    <section style={{"display":"flex"}}>
    <div style={{"backgroundColor":"black","width":"220px"}}>
        <Sidebar />
       </div>
    <div className='container-dashboard-project'>
     
       <div className='content-project-dashboard-project'>
        
       { slides.map(( slide,index)=>{
        return(
          <div className='card-container-project'>

          <div className="image-container-project">
          <img src={img38} alt="" />
          </div>
          <div className="card-content-project">
          <div className="card-title-project">
           <h3> {slide.category}</h3>
          </div>

          <div className='card-body-project'>
            <p>{slide.subCategory}</p>
          </div>
          
        
          </div>
     <div className="btnDpf-project">
     
<div style={{"display":"flex"}} >
<Link to="/editproject" >
            <button onClick={()=>this.props.setCurrent(slide)}>
              <a>complete or edit your project</a>
            </button>
            </Link>
            <Link to="/projectDetails" >    
  <AiOutlineEye style={{"marginLeft":"10px","marginTop":"3px"}}  size={25} />
  </Link>
  </div>
          
      </div>
       </div>
        )
      })
      } 
        
       </div>
     
    </div>
    </section>
    
    </React.Fragment>
  )


}
  
}
const MapStateToProps=state=>{
  return{
    myproject:state.project
  }
}
const MapDispatchToProps=dispatch=>{
  return{
   setCurrent:project=>dispatch(saveProject(project)),
   getProject:()=>dispatch(getProject()),
   
  }
}


export default connect(MapStateToProps,MapDispatchToProps)(MyProjects)