import{ADD_PROJECT,DELETE_PROJECT,UPDATE_PROJECT,PROJECT_ERROR,REMOVE_CURRENT_PROJECT,GET_PROJECT,SAVE_PROJECT} from "./types"
import axios from "axios"


//get project
export const getProject=()=>dispatch =>{
  const config ={
    headers:{
        'Content-Type':"application/json"
    }
}
  axios.get("/api/project",config)
    .then(res=>
      dispatch({ 
        type:GET_PROJECT,
        payload:res.data
  
      })
    )
    .catch(err=>dispatch({
      type:PROJECT_ERROR,
      payload:err.response.msg
  }))


}

//add project
export const addProject=newProject=>dispatch =>{
  const config ={
    headers:{
        'Content-Type':"application/json"
    }
}
  axios.post("/api/project",newProject,config)
    .then(res=>
      dispatch({ 
        type:ADD_PROJECT,
        payload:res.data
  
      })
    )
    .catch(err=>dispatch({
      type:PROJECT_ERROR,
      payload:err.response.msg
  }))


}
export const editProject=updatedProject=>dispatch =>{
  const config ={
    headers:{
        'Content-Type':"application/json"
    }
}
axios
.put(`/api/project/${updatedProject._id}`,updatedProject,config)
.then((res) => 
console.log(res),
  dispatch({
    type:UPDATE_PROJECT ,
    payload: updatedProject,
  }),
 
)
}
export const saveProject=project=> {
  return{
    type:SAVE_PROJECT,
    payload: project
  }
}