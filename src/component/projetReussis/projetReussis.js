import React from 'react'
import"./projetReussis.css"
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'
import img5 from '../../images/img-5.jpg'
import img6 from '../../images/img-6.jpg'
import img7 from '../../images/img-7.jpg'
import img8 from '../../images/img-8.jpg'
import img9 from '../../images/img-9.jpg'
import img10 from '../../images/img-10.jpeg'
import img11 from '../../images/img-11.jpeg'
import img12 from '../../images/img-12.jpeg'
import {Link} from "react-router-dom"
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
const projetReussis =(props) =>{
  const slides = [
  {image:img1,title:"this a title",description:"This a description"},
  {image:img2,title:"this a title",description:"This a description"},
  {image:img3,title:"this a title",description:"This a description"},
  {image:img4,title:"this a title",description:"This a description"},
  {image:img5,title:"this a title",description:"This a description"},
  {image:img6,title:"this a title",description:"This a description"},
  {image:img7,title:"this a title",description:"This a description"},
  {image:img8,title:"this a title",description:"This a description"},
  {image:img9,title:"this a title",description:"This a description"},
  {image:img10,title:"this a title",description:"This a description"},
  {image:img11,title:"this a title",description:"This a description"},
  {image:img12,title:"this a title",description:"This a description"},];
  const slideLeft = ()=>{
   var slider = document.getElementById("slider");
   slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = ()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <section id="projetReussis"> 
     
    <div className="containerProjetReussis">
    <h4 style={{marginLeft:"5px"}}>Successful project</h4>
      <div className='main-slider-container'>
     
      <MdChevronLeft size={40} className='slider-icon left' onClick={slideLeft} />
      <div id='slider'>
    { slides.map(( slide,index)=>{
        return(
         <div to="/projectDetails" className='slider-card' key={index}>
              
           <Link to="/projectDetails" >
            <img src={slide.image} className='slider-card-image'></img>
            </Link>
            <p className='slider-card-title'>{slide.title}</p>
            <p className='slider-card-description'>{slide.description}</p>

         </div>
        )
      })
      } 

      </div>
      <MdChevronRight size={40}  className='slider-icon right' onClick={slideRight} />
     
      </div>
    </div>
    </section>
  )
}

export default projetReussis
