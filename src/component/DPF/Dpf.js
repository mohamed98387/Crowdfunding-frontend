import React from 'react'
import "./Dpf.css"
import img1 from '../../images/img-1.jpg'
import img2 from '../../images/img-2.jpg'
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'
import img5 from '../../images/img-5.jpg'
import img6 from '../../images/img-6.jpg'
import {Link} from "react-router-dom"
function Dpf({title,imageUrl,body}) {
  return (
<section id="Dpf">
<h4 style={{marginLeft:"40px"}}>Latest Funded Projects</h4>
  <div className='containerDPF'>
 
       <div className='card-container'>

          <div className="image-container">
          <img src={img1} alt="" />
          </div>
          <div className="card-content">
          <div className="card-title">
           <h3> Card Title</h3>
          </div>

          <div className='card-body'>
            <p>description description description description description description description description</p>
          </div>
          
        
          </div>
     <div className="btnDpf">
     <Link to="/projectDetails" >
            <button>
              <a>view more</a>
            </button>
            </Link>
      </div>
       </div>


       
       <div className='card-container'>

          <div className="image-container">
          <img src={img2} alt="" />
          </div>
          <div className="card-content">
          <div className="card-title">
           <h3> Card Title</h3>
          </div>

          <div className='card-body'>
            <p>description description description description description description description description</p>
          </div>
          
        
          </div>
     <div className="btnDpf">
     <Link to="/projectDetails" >
            <button>
              <a>view more</a>
            </button>
            </Link>
      </div>
       </div>



       
       <div className='card-container'>

          <div className="image-container">
          <img src={img3} alt="" />
          </div>
          <div className="card-content">
          <div className="card-title">
           <h3> Card Title</h3>
          </div>

          <div className='card-body'>
            <p>description description description description description description description description</p>
          </div>
          
        
          </div>
     <div className="btnDpf">
     <Link to="/projectDetails" >
            <button>
              <a>view more</a>
            </button>
            </Link>
      </div>
       </div>



       
       <div className='card-container'>

          <div className="image-container">
          <img src={img4} alt="" />
          </div>
          <div className="card-content">
          <div className="card-title">
           <h3> Card Title</h3>
          </div>

          <div className='card-body'>
            <p>description description description description description description description description</p>
          </div>
          
        
          </div>
     <div className="btnDpf">
     <Link to="/projectDetails" >
            <button>
              <a>view more</a>
            </button>
            </Link>
      </div>
       </div>
  </div>
</section>
  )
}

export default Dpf
