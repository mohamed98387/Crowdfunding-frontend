import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import axios from "axios"
import "./MyFavourites.css"
import {connect} from "react-redux"
import {Popover} from "antd"
import {saveProject} from "../../../actions/ProjectActions"
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";
const MyFavourites = (props) => {
  const [Projects, setProjects] = useState([]);
  const getProjects = () => {
    axios.get("/api/project/all").then((res) => {
      setProjects(res.data)
      console.log(Projects)
    });
  };
  const onClickRemove=(projectId)=>{
  const  variable={
      projectId:projectId,
      userId:props.auth.user._id
    }
    axios.post("/api/favorite/removeFromFavorite", variable)
    .then(response=>{
      if(response.data.success){
  alert('favorite project removed')
      }else{
        alert('failed to remove favorite')
      }
    })
  }
  const [anchor, setAnchor] = useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };
  const variable={
    userId:props.auth.user._id,
 
  }
const[favoriteMovies,setfavoriteMovies]=useState([])
  useEffect(() => {
    getProjects();
    console.log(favoriteMovies)
    console.log(props)
    axios.post("/api/favorite/getFavoreEvent", variable).then((response) => {
      if (response.data.success) {
        setfavoriteMovies(response.data.favorites)
     
      }else{
        alert('failed to get favorite projects')
      }
    });
  }, []);
  const renderTableBody = favoriteMovies.map((project,index)=>{
 
  
    return     <tr >

    

      <td>{project.title} <buuton>
        
        </buuton></td>
      <td>{project.category}</td>
      <td><img src={project.picture} style={{"width":"300px","height":"150px"}}></img>
      </td>
      <td>{project.dateLaunche}</td>
      <td><button onClick={()=>onClickRemove(project.projectId)}>Remove from the Favorites</button></td>
    
      <td>
      <Link to="/projectDetails" style={{"textDecoration":"inherit"}}  >
   
        <AiOutlineEye color='blue' style={{"marginLeft":"20px"}} 
         onClick={()=>props.setCurrent(project.projectId)}  size={25} />
        </Link>
        </td>
    </tr>
   
  });
  return (
    <React.Fragment>
    
    <section>
    <div className='container-dashboard'>
       <div style={{"backgroundColor":"black","width":"220px","height":"800px"}}>
        <Sidebar />
       </div>
       <div style={{"width":"1000px","marginTop":"20px","marginLeft":"50px"}}>
        <h2>Favorite Projects by Me</h2>
    <hr />
        <table style={{"marginTop":"5px"}}>
          <thead>
            <tr>
               <th>Project Title</th>
               <th>Project Category</th>
               <th>Project Image</th>
               <th>dateLaunche</th>
               <th>Remove from Favorites</th>
               <th>go to project</th>
            </tr>
          </thead>
          <tbody>
{renderTableBody}
          </tbody>
        </table>
       </div>
     
    </div>
  
    </section>
    
    </React.Fragment>
  )
}
const MapStateToProps=state=>{
  return{
    auth:state.auth
  }
}
const MapDispatchToProps=dispatch=>{
  return{
   setCurrent:project=>dispatch(saveProject(project))
  
   
  }
}
export default connect(MapStateToProps,MapDispatchToProps)(MyFavourites)