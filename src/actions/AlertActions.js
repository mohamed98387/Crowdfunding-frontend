import{SET_ALERT ,  REMOVE_ALERT} from "./types"

 export const setAlert=(msg,type,id)=> dispatch =>{
 
    dispatch ({
        type: SET_ALERT,
        payload:{msg, type, id}
    })
 }
 export const removeAlert=id=> dispatch =>{

    dispatch({
        type: REMOVE_ALERT,
        payload:id
    }) 
 }