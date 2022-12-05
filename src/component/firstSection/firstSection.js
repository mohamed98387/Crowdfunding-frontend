import React from 'react'
import './firstSection.css'
//import { Button } from '../Button';
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'
import img5 from '../../images/img-5.jpg'
import img6 from '../../images/img-6.jpg'
import ProjetReussis from '../projetReussis/projetReussis';
import Dpf from '../DPF/Dpf';
import Alu from '../Alu/Alu';
import {Link} from "react-router-dom"
import VideoBg from "../../video/WhiteTwo.mp4"
import {connect} from "react-redux"
import {lodedUser} from '../../actions/AuthActions'


class firstSection extends React.Component {

  componentWillMount = () => {
    this.props.lodedUser()
    console.log(this.props)
  }
 
  
  render(){
    return (
      <div id="home">
            <video src={VideoBg} autoPlay loop muted />
      <div className='allSection'>
  
      <div className='leftSection'>
         
      <h2 className='text1' >A CREATION</h2>
      <h3 className='text2' >To The LIGHT</h3>
     
     
   {/*<button  className='btnConnecter' >se connecter</button>
  <Button buttonStyle="btn--outline"> Lancer un projet
  </Button>*/}
  <h3 style={{paddingTop:"15px"}} className='h3' >au cours des dernièrs 24 heures</h3>
  <div className='sectionNumber' style={{borderRadius:"10px",marginTop:"20px"}}>
  <div className='count'><span className='number' style={{marginLeft:"20px"}}> 20   </span>
   <span className='number' tyle={{marginLeft:"3px"}}>  200 098 TND </span> <span className='number'>8500 </span>
  
  </div>
  <div className='icons'>
  <h4 >FUNDED PROJECTS</h4>
  <h4 style={{marginLeft:"10px"}} >AWARDS FOR ART</h4>
  <h4 style={{marginLeft:"60px"}}>ENGAGEMENT</h4>
  </div>
  
    
    </div>
  
      </div>
       <div className='container'>
        <Link to="/projectDetails" className='box'>
          <div className='imgBx'>
       <img  src={img1} alt="img1" /> 
       
       </div>
       <div className='content'>
           <div>
            <h2>Project title</h2>
            <p>
              description description description description 
            </p>
           </div>
           
       </div>
       </Link>
       <Link to="/projectDetails" className='box'>
          <div className='imgBx'>
       <img  src={img2} alt="img2" /> 
       
       </div>
       <div className='content'>
           <div>
            <h2>Project title</h2>
            <p>
            description description description description 
            </p>
           </div>
           
       </div>
       </Link>
       <Link to="/projectDetails" className='box'>
          <div className='imgBx'>
       <img  src={img3} alt="img3" /> 
       
       </div>
       <div className='content' >
           <div>
            <h2>Project title</h2>
            <p>
            description description description description
            </p>
           </div>
           
       </div>
       </Link>
       <Link to="/projectDetails"  className='box'>
          <div className='imgBx'>
       <img src={img4} alt="img4" /> 
       
       </div>
       <div className='content'>
           <div>
            <h2>Project title</h2>
            <p>
            description description description description
            </p>
           </div>
           
       </div>
       </Link>
       <Link to="/projectDetails"  className='box'>
          <div className='imgBx'>
       <img src={img5} alt="img5" /> 
       
       </div>
       <div className='content'>
           <div>
            <h2>Project title</h2>
            <p>
            description description description description
            </p>
           </div>
           
       </div>
       </Link>
       <Link to="/projectDetails"  className='box'>
          <div className='imgBx'>
       <img src={img6} alt="img6" /> 
       
       </div>
       <div className='content'>
           <div>
            <h2>Project title</h2>
            <p>
            description description description description
            </p>
           </div>
           
       </div>
       </Link>
       
       </div>
      </div>
      <Alu />
      <ProjetReussis />
      <Dpf />
    
      </div>
    )

  }
 
}

export default connect(null,{lodedUser})(firstSection) 
