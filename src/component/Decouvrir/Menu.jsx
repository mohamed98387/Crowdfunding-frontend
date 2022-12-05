import React,{useEffect} from 'react'
import "./cssFile.css"
import {connect} from "react-redux"
import {saveProject} from "../../actions/ProjectActions"
import { Link } from 'react-router-dom'
const Menu = (props) =>{
     
     return(
          
          <div className='section-center'>
                {
                    props.items.map((menuItem,index)=>{
                        const {id,title,picture,desc,objective} = menuItem;

                         return(
                              <Link to="/projectDetails" style={{"textDecoration":"inherit"}}  >
                             <div onClick={()=>props.setCurrent(menuItem)} className="menu-item" key={index}>
                                  <img src={picture} alt={title} className="photo" />
                                  <div className="item-info">
                                   <header>
                                     <h4 style={{"color":"black"}}>{title}</h4>
                                     <h4 className="price">{objective} DT</h4>
                                    </header>
                                      <p className="item-text">{desc}</p>
                                  </div>
                                 
                             </div>
                             </Link>
                         )
                    })
                   
               }
                
          </div>
     )
}

const MapDispatchToProps=dispatch=>{
     return{
      setCurrent:project=>dispatch(saveProject(project))
     
      
     }
   }
   
export default connect(null,MapDispatchToProps)(Menu);