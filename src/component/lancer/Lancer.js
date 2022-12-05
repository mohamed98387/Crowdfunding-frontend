import React from 'react'
import "./Lancer.css"
import {Link} from "react-router-dom"
import VideoBg from "../../video/WhiteTwo.mp4"
function Lancer() {
  return (
    <div className='main'>
     <video src={VideoBg} autoPlay loop muted />
    <div className='container_Lancer'> 

   <h1 className='title_lancer'> Realize your creative projects</h1> 
   <Link to="/formOne" >
   <button className="btn--outline-lancer-projet" >let's go

</button>
</Link>
    </div>
    </div>
  )
}

export default Lancer
