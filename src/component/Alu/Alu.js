import React from 'react'
import './Alu.css'
import img11 from '../../images/img-11.jpeg'
import img26 from '../../images/img-26.jpeg'
import img22 from '../../images/img-22.jpeg'
import img18 from '../../images/img-18.jpeg'
import {Link} from "react-router-dom"
function Alu() {
  return (
    <section id="alu">
    <div className='containerAlu'>
      <div className='aluu'>
        <h4>In the Spotlight</h4>

        <div className='imgH' >
          <Link to="/projectDetails" >
        <img src={img11} alt="img11" /> 
        </Link>
        <h4 style={{color:"rgb(238, 80, 80)"}}>finance to 80 %</h4>
        <div className='progresse-line'><span></span></div>
      
        <h2 style={{marginTop:"10px"}}>Title</h2>
       
        <h4 style={{marginTop:"10px"}}>Description</h4>
        </div>

        </div>
        <div className='aluutwo'>
             <h4>Top 3</h4>
             <div className='containerRightsection'>
              <div className='sectionOne'>
                <div>
                <Link to="/projectDetails" >
              <img  src={img26} alt="img26" /> 
              </Link>
              <h4 style={{color:"rgb(238, 80, 80)"}}>finance to 80 %</h4>
              <div className='progresse-line'><span></span></div>
            
              </div>
              <div>
              <h1 style={{marginLeft:"10px"}} >title one</h1>
              <h4 style={{marginLeft:"10px"}}>description one</h4>
              </div>
              </div>
              <div className='sectionOne'>
                <div style={{marginTop:"10px"}}>
                <Link to="/projectDetails" >
              <img  src={img22} alt="img22" /> 
              </Link>
              <h4 style={{color:"rgb(238, 80, 80)"}}>finance to 50 %</h4>
              <div className='progresse-linetwo'><span></span></div>
           
              </div>
              <div style={{marginTop:"10px"}}>
              <h1 style={{marginLeft:"10px"}} >title two</h1>
              <h4 style={{marginLeft:"10px"}}>description two</h4>
              </div>
              </div>
              <div className='sectionOne'>
                <div style={{marginTop:"10px"}}>
                <Link to="/projectDetails" >
              <img  src={img18} alt="img18" /> 
              </Link>
              <h4 style={{marginTop:"10px",color:"rgb(238, 80, 80)"}}>finance to 100 %</h4>
              <div className='progresse-linethree'><span></span></div>
           
              </div>
              <div style={{marginTop:"10px"}}>
              <h1 style={{marginLeft:"10px"}} >title three</h1>
              <h4 style={{marginLeft:"10px"}}>description three</h4>
              </div>
              </div>
    


             </div>
        </div>
    </div>
    </section>
  )
}

export default Alu
