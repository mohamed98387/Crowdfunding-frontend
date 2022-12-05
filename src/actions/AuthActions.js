import {REGISTER_SUCCES, REGISTER_FAIL,USER_LODED, LOGIN_SUCCES, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT,EDIT_USER,SAVE_USER} from "./types"
import axios from "axios"
import setAuthToken from "../utils/setAuthToken"
//Load User 
export const lodedUser =() =>dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    axios.get("/api/auth")
         .then(res=>
            dispatch({
            type:USER_LODED,
            payload:res.data
         })
         
         )
         .catch(()=>dispatch({
            type:AUTH_ERROR,
            
        }))
}


//Register User 
export const register =formData => dispatch=>{
    const config ={
        headers:{
            'Content-Type':"application/json"
        }
    }
    axios.post("/api/user",formData,config)
    .then(res=>{
        dispatch({
        type:REGISTER_SUCCES,
        payload:res.data
    })

 alert("register success")

    
 }).catch(err=>dispatch({
        type:REGISTER_FAIL,
        payload:err.response.data.msg
    }))
}
//Login User 
export const login =formData => dispatch=>{
    const config ={
        headers:{
            'Content-Type':"application/json"
        }
    }
    axios.post("/api/auth",formData,config)
    .then(res=>{
          console.log(res.data)
        dispatch({
            
        type:LOGIN_SUCCES,
        payload:res.data
    } )
    dispatch(lodedUser())
    window.location.href = "http://localhost:3000/";
 } )
    .catch(err=>dispatch({
        type:LOGIN_FAIL,
        payload:err.response.data.msg
    })
    )
}
//Logout User 
export const logout =() => dispatch=>{
    dispatch({
        type:LOGOUT
    })
    window.location.href = "http://localhost:3000/";
    }
//Clear User 
export const clearError =() => dispatch=>{
dispatch({
    type:CLEAR_ERROR
})
}

export const editeUser = (updateUser) => (dispatch) => {
    const config ={
        headers:{
            'Content-Type':"application/json"
        }
    }
    axios
      .put(`/api/user/${updateUser._id}`,updateUser,config)
      .then((res) => 
      
        dispatch({
          type: EDIT_USER,
          payload: updateUser,
        })
      )
     
  };
  //saved user
  export const saveUser =user => dispatch=>{
    dispatch({
        type:SAVE_USER,
        payload:user
    })
  
    }