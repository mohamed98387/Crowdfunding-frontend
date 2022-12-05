import React from 'react'
import Sidebar from '../Sidebar'
import {AiFillInstagram,AiFillFacebook,AiFillGithub,AiFillTwitterSquare} from "react-icons/ai";
import "./Marketing.css"
class Marketing extends React.Component {
    componentDidMount = () => {
 
        console.log(this.props)
    
      }
      render(){

        return (
            <React.Fragment>
            
            <section>
            <div className='container-dashboard'>
               <div   style={{backgroundColor:"black","width":"220px","height":"660px"}}>
     
                <Sidebar />
               </div>
               <div className='content-dashboard-mrk' style={{"marginLeft":"300px","marginTop":"100px"}} >
                <div style={{"display":"flex","marginTop":"20px"}}>
                <AiFillInstagram size={30} className="inst" />
                <input style={{"marginLeft":"10px","width":"300px"}} type="text"
                placeholder='instagram account'></input>
                </div>
                <div style={{"display":"flex","marginTop":"20px"}}>
                <AiFillFacebook size={30}  className="fcb"/>
                <input style={{"marginLeft":"10px","width":"300px"}} type="text"
                 placeholder='facebook account'></input>
                </div>
                <div style={{"display":"flex","marginTop":"20px"}}>
                <AiFillGithub size={30} className='git'/>
                <input style={{"marginLeft":"10px","width":"300px"}} type="text"
                placeholder='Git account' ></input>
                </div>
                <div style={{"display":"flex","marginTop":"20px"}}>
                <AiFillTwitterSquare size={30} className="twitter"/>
                <input style={{"marginLeft":"10px","width":"300px"}} type="text"
                placeholder='twitter account '></input>
                </div>
                
                <button className='btn-addReward' style={{"width":"150px","height":"50px","marginTop":"20px","marginLeft":"120px"
,"backgroundColor":"#025bee","border":"none","borderRadius":"5px","cursor":"pointer","fontSize": "20px",
"color": "white"
}}>Submit</button>
               </div>
             
            </div>
            </section>
            
            </React.Fragment>
          )

      }

}

export default Marketing