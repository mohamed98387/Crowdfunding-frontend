
import React from 'react'
import {connect} from "react-redux"
import Sidebar from '../Dashboard/Sidebar'
import {Link} from "react-router-dom"
import {editProject} from "../../actions/ProjectActions"
class EditProjectthree extends React.Component {
    constructor(props){
		super(props);
		this.state = {
      
      Risks:this.props.saved.Risks,
    
		}
	}
    handleChange=e=>{
		this.setState({[e.target.name]: e.target.value })
	}
    render(){
        const _id=this.props.saved._id;
        const Risks=this.state.Risks;
        const updatedProject={_id,Risks}
        return(
         
<section style={{"display":"flex"}}>
    <div style={{"backgroundColor":"black","width":"220px","height":"4800px"}}>
        <Sidebar />
       </div>
    <div className='container-dashboard-project-edit ' style={{"paddingLeft":"130px","width":"700px"}}>

{/*sections6*/}
<h1 style={{"fontSize":"30px","marginTop":"30px"}}>
Risks and Challenges
      </h1>
      <h5 className="info-edit"> 
      Be honest about the risks and challenges of your project and how you plan to overcome the various obstacles.
    </h5>
 <div className='sectionsevenedit'>
 

    
       <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
      <h3>description</h3>
       <input  name='Risks' value={Risks}  onChange={this.handleChange}  placeholder='describe your project as if you were talking to a friend'
       style={{"marginTop":"10px","backgroundColor":"white","borderRadius":"5px","border":"0.1px solid grey"
       ,"width":"500px","height":"200px","fontSize":"15px"}}
       >
       
       </input>


     </div>
     
 {/*   {this.state.active ? <div> edit</div> : <div></div> }  */}

</div>

{/* section two*/}
{/* 
<h1 style={{"fontSize":"30px","marginTop":"30px"}}>
add Collaborators
      </h1>
      <h5 className="info-edit">  If you're working with other people, you can allow them to edit this project, communicate with your contributors, and arrange reward delivery.</h5>
     
<div className='sectionOneedit'style={{"height":"500px"}}>
        <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
       <h3>e-mail</h3>
      
       <input name='title' style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
    ,"borderRadius":"5px","border":"0.1px solid grey","height":"45px"}}
    placeholder="name@email.com"></input>


      </div>
      <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
       <h3>title</h3>
      
       <input name='title' style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
    ,"borderRadius":"5px","border":"0.1px solid grey","height":"45px"}}
    placeholder="collabortor"></input>


      </div>
      <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
       <h3>Permissions</h3>
       <h5 className="info-edit">All of your collaborators will have access to your project data, including your total funding, amount and number of contributors per reward, video statistics and referrers. Please indicate below the access to be granted to this collaborator.</h5>
<div style={{"marginTop":"30px"}}>
    <div style={{"display":"flex"}}>
    <input type="checkbox" style={{"width":"20px"}}></input>
    <h5 style={{"marginLeft":"20px"}}>Edit my project</h5>
    </div>
    <div style={{"display":"flex","marginTop":"5px"}}>
    <input type="checkbox" style={{"width":"20px"}}></input>
    <h5 style={{"marginLeft":"20px"}}>Manage the community</h5>
    </div>
    <div style={{"display":"flex","marginTop":"5px"}}>
    <input type="checkbox" style={{"width":"20px"}}></input>
    <h5 style={{"marginLeft":"20px"}}>Arrange delivery of rewards</h5>
    </div>
   
    </div>
      </div>
      </div>
    */}

<Link to="/myProjects">
<button onClick={()=>{this.props.editProject(updatedProject)
alert('project updated')
}}
className='btn-sv' 
 style={{"width":"150px","height":"50px","marginTop":"20px","marginLeft":"420px"
,"backgroundColor":"#31a3d8","border":"none","borderRadius":"5px","cursor":"pointer"
}}>finish</button>

</Link>

        </div>
            </section>
        )
    }
}
const MapStateToProps=state=>{
    return{
      saved:state.project.saved
    }
  }

export default connect(MapStateToProps,{editProject})(EditProjectthree)

