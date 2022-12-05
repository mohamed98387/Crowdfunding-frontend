
import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import Sidebar from '../Dashboard/Sidebar'
import {editProject} from "../../actions/ProjectActions"
import axios from "axios";
class EditProjecttwo extends React.Component {
    constructor(props){
		super(props);
		this.state = {
      
  
      Reward:[{
        titleReward:null,
        amountReward:null,
    descriptionReward:null
}]
		}
	}
  addReward = (newReward) => {
 
    axios.put(`/api/project/reward/${this.props.saved._id}`,newReward  ).then((res) => {
        console.log(res)
      if (res.data.success) {
        alert('reward added')
      }else{
        console.log(res.data)
        console.log(newReward)
        console.log(this.props.saved._id)
      }
    });
  };  
    handleChangeOne=e=>{
        this.setState(prevState => ({
            Reward: prevState.Reward.map(
          obj => ( Object.assign(obj, { titleReward: e.target.value}) )
        )
      }));
      }
      handleChangeTwo=e=>{
        this.setState(prevState => ({
            Reward: prevState.Reward.map(
          obj => ( Object.assign(obj, { amountReward: e.target.value}) )
        )
      }));
      }
      handleChangeThree=e=>{
        this.setState(prevState => ({
            Reward: prevState.Reward.map(
          obj => ( Object.assign(obj, { descriptionReward: e.target.value}) )
        )
      }));
      }
    render(){
        const _id=this.props.saved._id;

       const Reward=this.state.Reward;
   const    titleReward=this.state.Reward[0].titleReward;
    const   amountReward=this.state.Reward[0].amountReward;
 const  descriptionReward=this.state.Reward[0].descriptionReward;
 const newReward={
  "Reward": {"amountReward": amountReward,
  "descriptionReward":descriptionReward ,
  "titleReward": titleReward}
 }
//        const updatedProject={_id,Reward}
        return(
         
<section style={{"display":"flex"}}>
    <div style={{"backgroundColor":"black","width":"220px","height":"4800px"}}>
        <Sidebar />
       </div>
    <div className='container-dashboard-project-edit ' style={{"paddingLeft":"130px","width":"700px"}}>

{/*sections6*/}
<h1 style={{"fontSize":"30px","marginTop":"10px"}}>
Add rewards
      </h1>
      <h5 className="info-edit"> Most creators offer between 3 and 10 tiers of rewards, which can take the form of physical items or brand new experiences. Remember to clearly define the expectations of contributors.</h5>
 <div className='sectionsixedit'>
 <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
 <h3>title reward</h3>
       <input name="titleReward" style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
    ,"borderRadius":"5px","border":"0.1px solid grey","height":"45px"}}
    onChange={this.handleChangeOne}
    value={titleReward}   >
       
    </input>
      </div>

      <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
 <h3>amount reward</h3>
       <input
        value={amountReward}  
       onChange={this.handleChangeTwo}
       name="objective"  style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
    ,"borderRadius":"5px","border":"0.1px solid grey","height":"45px"}} placeholder="                                            DT"></input>
       </div>
       <div style={{"marginLeft":"30px","paddingTop":"20px"}}>
      <h3>description reward</h3>
       <input
          value={descriptionReward}  
        onChange={this.handleChangeThree}
        name="descriptionReward" style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
    ,"borderRadius":"5px","border":"0.1px solid grey","height":"80px","width":"500px"}}></input>
     </div>
     <button
     onClick={()=>{this.addReward(newReward)
      alert('reward added')
    }}
     className='btn-addReward' style={{"width":"150px","height":"50px","marginTop":"20px","marginLeft":"380px"
,"backgroundColor":"#025bee","border":"none","borderRadius":"5px","cursor":"pointer","fontSize": "20px",
"color": "white"
}}>add rewards</button>
  
</div>
<Link to="/editprojectthree">
<button 
className='btn-sv' 

style={{"width":"150px","height":"50px","marginTop":"20px","marginLeft":"420px"
,"backgroundColor":"#31a3d8","border":"none","borderRadius":"5px","cursor":"pointer","fontSize":"15px"
}}>Save and go to next</button>

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
  const MapDispatchToProps=dispatch=>{
    return{
      editProject:()=>editProject()
     
    }
  }
export default  connect(MapStateToProps,{editProject})(EditProjecttwo) 