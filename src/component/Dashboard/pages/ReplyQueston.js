import React,{useEffect,useState}from 'react'
import axios from 'axios';

function SingleQuestion(props) {
  const [Faq,setFaq]=useState([])
  const [answerId,setanswerId]=useState("")
  const [x,setx]=useState(false)
  const savefaq = (e) => {
    e.preventDefault();
    setx(!x)
    const variablesf = { 
      writerQuestion:props.parentQuestionId,
      writerAnswer:answerId
    
     

   }

  axios.post('/api/faq/saveFaq', variablesf)
  .then(response=> {
    if(response.data.success) {
    console.log(response.data.result)
      setFaq(response.data.result)
      alert('your faq shared')
  } else {
    console.log(response)
      alert('Failed to save faq')
  }
})

  }
  return (
    <div>

{
 props.AnswerQuestionLists.map((Answer, index) => (
  <React.Fragment>
      {Answer.IdQuestion === props.parentQuestionId &&
          <div style={{ width: '80%', marginLeft: '100px' }}>
             <br/>
             
             <h3>my Answer :</h3>
             <br/>
              <p style={{"backgroundColor":"rgb(248, 247, 247)","padding":"10px"
                    ,"width":"900px","borderRadius":"10px"}}>{Answer.content}</p>
             <span  onClick={()=>{setx(true)
             setanswerId(Answer._id)}
            }
                         style={{"fontSize":"13px","color":"gray","cursor":"pointer"}}>share </span>
                      
              { x ?
              <div>
               <p>are u sur to share this ?</p> 
              <button style={{"cursor":"pointer"}}
               onClick={savefaq
    
              }>yes</button>
              <button style={{"cursor":"pointer"}}
              onClick={()=>setx(false)
              }
              >no</button>
              </div>
              :
              <div>
             </div>

              }
                        
          </div>
      }
  </React.Fragment>
 ))
}


    </div>
  )
}

export default SingleQuestion
