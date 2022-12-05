import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import { Comment, Avatar, Button, Input } from 'antd';
import {connect} from "react-redux"
import axios from 'axios';
import ReplyQueston from "./ReplyQueston"
const{TextArea} =Input
function MyQuestions(props) {
  const [AnswerQuestionLists,setAnswerQuestionLists]=useState([])
  const [Faq,setFaq]=useState([])
  const [x,setx]=useState(false)
  
  const [QuestionId,setQuestionId]=useState("")
  const [AskerId,setAskerId]=useState("")
  const [AnswerQuestion, setAnswerQuestion] = useState("")

  const handleChange = (e) => {
    setAnswerQuestion(e.currentTarget.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = { 
        content: AnswerQuestion,
        writer: props.auth.user._id,
        AskerId: AskerId,
        IdQuestion:IdQuestion,

     }

    axios.post('/api/answer/saveanswerQuestion', variables)
    .then(response=> {
      if(response.data.success) {
        setAnswerQuestion("")
        updateAnswerQuestionLists(response.data.result)
     
    } else {
        alert('Failed to save answerquestion')
    }
  })
}

  const updateAnswerQuestionLists =(newComment)=>{
    setAnswerQuestionLists(AnswerQuestionLists.concat(newComment))
   }
  const [OpenReply, setOpenReply] = useState(false)
  const [IdQuestion,setIdQuestion]=useState("")
  const openReply = () => {
    setOpenReply(!OpenReply)

}
    const [MyQuestions, setMyQuestions] = useState([])
    const variable={
        createrId:props.auth.user._id,
     
      }
    useEffect(() => {
      axios.post("/api/answer/getAnswers").then((response) => {
        if (response.data.success) {
       
          setAnswerQuestionLists(response.data.answer)
        }else{
          alert('failed to get  AnswerQuestion')
      
        }
      });
  
        axios.post("/api/question/getMyProjectQuestion", variable).then((response) => {
          if (response.data.success) {
            setMyQuestions(response.data.questions)
       
          }else{
            alert('failed to get MyQuestions projects')
          }
        });
      }, []);
      const render = MyQuestions.map((question,index)=>{
 
  
        return    (
        <div style={{"marginTop":"10px"}} >




        <div style={{"display":"flex"}}>
       <img
                        style={{"width":"50px","height":"50px","borderRadius":"50px"}}
                            src={question.writer.pic}
                            alt="image"
                        />
                    
               
                    <p style={{"marginLeft":"25px"}}><b>{question.writer.firstname} </b>ask a question about project named by <b>{question.projectId.title}</b></p>
                    </div>
                 
                        <p style={{"marginLeft":"70px","backgroundColor":"rgb(248, 247, 247)","padding":"10px"
                    ,"width":"900px","borderRadius":"10px"}}>
                         {question.content}
                        </p>
                        <span  onClick={()=>{document.getElementById("myTextField").focus()
                          openReply()
                        setIdQuestion(question._id)
                        setAskerId(question.writer._id)
                      }} style={{"fontSize":"13px","color":"gray","marginLeft":"70px"
                        ,"cursor":'pointer'}}>Reply to </span>

                       
                       
                        
                        <br/>
                        <ReplyQueston AnswerQuestionLists={AnswerQuestionLists} parentQuestionId={question._id} /> 
                        </div>  )
       
      });
  return (
    <React.Fragment>
    
    <section>
    <div className='container-dashboard'>
       <div style={{"backgroundColor":"black","width":"220px","height":"1900px"}}>
        <Sidebar/>
       </div>
       <div style={{"width":"1000px","marginTop":"20px","marginLeft":"50px"}}>
     
{render}

              <form style={{display:"flex","marginTop":"20px"}} onSubmit={onSubmit}>

<TextArea 
  style={{ width: '100%', borderRadius: '5px' }}
  onChange={handleChange}
 id="myTextField"
 value={AnswerQuestion}
  placeholder="write some comments"
/>
<br />
  <Button   style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button> 
 
    </form>


       </div>
    </div>
  
    </section>
    
    </React.Fragment>
  )
}
const MapStateToProps=state=>{
    return{
      myproject:state.project.saved,
      auth:state.auth
    }
  }
  export default connect(MapStateToProps,null)(MyQuestions)
