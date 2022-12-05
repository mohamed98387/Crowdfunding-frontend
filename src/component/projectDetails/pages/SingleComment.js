import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';
import {connect} from "react-redux"
import axios from 'axios';
const{TextArea} =Input
function SingleComment(props) {
  const [CommentValue ,setCommentValue]=useState("")
  const [OpenReply, setOpenReply] = useState(false)
  const openReply = () => {
    setOpenReply(!OpenReply)
}

    const handleChange=(e)=>{
      setCommentValue(e.currentTarget.value)
    }
    const onSubmit = (e) => {
      e.preventDefault();

      const variables = {
    
        writer: props.auth.user._id,
        projectId: props.myproject._id ,
        responseTo: props.comment._id,
          content: CommentValue
      }


      axios.post('/api/comment/saveComment', variables)
          .then(response => {
              if (response.data.success) {
             //   console.log(response.data.result)
                  setCommentValue("")
                  setOpenReply(!OpenReply)
                  props.refreshFunction(response.data.result)
              } else {
                  alert('Failed to save Comment')
              }
          })
  }
  return (
    <div style={{"marginTop":"20px"}}>
   <div >
    <div style={{"display":"flex"}}>
   <img
                    style={{"width":"50px","height":"50px","borderRadius":"50px"}}
                        src={props.comment.writer.pic}
                        alt="image"
                    />
                
           
                <p style={{"marginLeft":"25px"}}>{props.comment.writer.firstname}</p>
                </div>
             
                    <p style={{"marginLeft":"70px","backgroundColor":"rgb(248, 247, 247)","padding":"10px"
                ,"width":"1050px","borderRadius":"10px"}}>
                     {props.comment.content}
                    </p>
                    <span onClick={openReply}  style={{"fontSize":"13px","color":"gray","cursor":"pointer"}}>Reply to </span>
                    </div>  
                    { OpenReply &&
              <form style={{display:"flex","marginTop":"20px"}} onSubmit>

<TextArea 
  style={{ width: '100%', borderRadius: '5px' }}
  onChange={handleChange}
value={CommentValue}
  placeholder="write some comments"
/>
<br />
  <Button   style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button> 
 
    </form>
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

export default connect(MapStateToProps,null)(SingleComment)
