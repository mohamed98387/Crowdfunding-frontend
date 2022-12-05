import React,{useState,useEffect} from 'react'
import {connect} from "react-redux"
import axios from 'axios';
function FAQ(props) {
  const [Question, setQuestion] = useState("")
  const [Faq,setFaq]=useState([])
  useEffect(() => {
    axios.post("/api/faq/getFaq").then((response) => {
      if (response.data.success) {
     
        setFaq(response.data.faq)
      }else{
        alert('failed to get Faq')
    
      }
    });

     
    }, []);
  const handleChange = (e) => {
    setQuestion(e.currentTarget.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const variables = { 
        content: Question,
        writer: props.auth.user._id,
        projectId: props.myproject._id ,
        createrId: props.myproject.user
     }

    axios.post('/api/question/saveQuestion', variables)
    .then(response=> {
      if(response.data.success) {
        setQuestion("")
        props.refreshFunction(response.data.result)
        console.log(response.data.result)
    } else {
        alert('Failed to save question')
    }
  })
}
  return (
    <div style={{"height":"800px"}}>
     <h3 style={{'marginLeft':"110px","marginTop":"50px","backgroundColor":"rgb(230, 230, 230)"
    ,"paddingLeft":"20px","height":"60px","paddingTop":"20px","width":"500px"}}>must be logged in to ask a question</h3>
    
    
    { props.auth.token !== null ?
    <div>
    <input style={{"marginTop":"20px",'marginLeft':"110px","height":"40px","width":"400px"}}
       onChange={handleChange}
     value={Question}
     type="text"></input>
     <button style={{"backgroundColor":"black","color":"white","height":"30px"}}
      onClick={onSubmit}
     >ask a question</button>
     </div>
     :
     <div>
      
     </div>
    }
     <br />
        
     <h2 style={{"marginLeft":"110px"}}>Frequently asked Questions</h2>
     {
Faq.map((Answer, index) => (
  <React.Fragment>
       { Answer.writerQuestion.projectId === props.myproject._id  ?
     <div style={{"marginLeft":"110px","marginTop":"10px","height":"100px",
     "backgroundColor":"rgb(248, 247, 247)","padding":"20px","width":"800px"}}>
   

      <p>{Answer.writerQuestion.content}</p>
      <p>{Answer.writerAnswer.content}</p>
      </div>
      :
      <div>
     
      </div>

   
    } 
  </React.Fragment>
 ))
}

    </div>

  )
}
const MapStateToProps=state=>{
  return{
    myproject:state.project.saved,
    auth:state.auth
  }
}
export default connect(MapStateToProps,null)(FAQ)
