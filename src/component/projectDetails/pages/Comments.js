import React,{useState} from 'react'
import {Button ,Input } from 'antd'
import axios from 'axios';
import {connect} from "react-redux"
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
const{TextArea} =Input
function Comments(props) {
  const [Comment, setComment] = useState("")

  const handleChange = (e) => {
      setComment(e.currentTarget.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const variables = { 
        content: Comment,
        writer: props.auth.user._id,
        projectId: props.myproject._id  
     }

    axios.post('/api/comment/saveComment', variables)
    .then(response=> {
      if(response.data.success) {
        setComment("")
        props.refreshFunction(response.data.result)
    } else {
        alert('Failed to save Comment')
    }
  })
}
  return (
    <div style={{"height":"800px"}}>
      <br />
      <p> replies</p>
      <hr />
      {console.log(props.CommentLists)}
    
      {props.CommentLists && props.CommentLists.map((comment, index) => (
             (!comment.responseTo &&
                    <React.Fragment>
       <SingleComment comment={comment} projectId={props.myproject._id} refreshFunction={props.refreshFunction} />
       <ReplyComment CommentLists={props.CommentLists} projectId={props.myproject._id} parentCommentId={comment._id} refreshFunction={props.refreshFunction} />    
                    </React.Fragment>
             )
                
            ))}
      


      {/*comments lists*/}
    {/*root comment form*/}
    <form style={{display:"flex","marginTop":"20px","marginLeft":"75px"}} onSubmit={onSubmit}>
<TextArea 
  style={{ width: '72%', borderRadius: '5px' }}
  onChange={handleChange}
  value={Comment}
  placeholder="write some commentss"
/>
<br />
  <Button  onClick={onSubmit} style={{ width: '10%', height: '52px' }}>Submit</Button>
    </form>
 
    
    </div>
  )
}
const MapStateToProps=state=>{
  return{
    myproject:state.project.saved,
    auth:state.auth
  }
}

export default connect(MapStateToProps,null)(Comments)