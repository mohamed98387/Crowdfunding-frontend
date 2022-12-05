import {REGISTER_SUCCES , REGISTER_FAIL, LOGIN_SUCCES, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT, USER_LODED,EDIT_USER,SAVE_USER} from "../actions/types"
const initialState = {
    user:{
       
    },
    saved:null,
    token : localStorage.getItem("token"),
    isAuthenticated:null,
    user:null,
    error:null,
    errors:null
}
const AuthReducer = (state = initialState, action)=>{

    switch(action.type){
        case USER_LODED:
          
            return{
                ...state,
               isAuthenticated:true,
               user:action.payload
            }
       case LOGIN_SUCCES:    
       localStorage.setItem('token',action.payload.token)
        return{
            ...state,
            ...action.payload,
            isAuthenticated:true
        } 
       case REGISTER_SUCCES:
        localStorage.setItem('token',action.payload.token)
        return{
            ...state,
            ...action.payload,
            isAuthenticated:false
        }
        case LOGOUT:
        case LOGIN_FAIL:
         case AUTH_ERROR :
        case REGISTER_FAIL:
        localStorage.removeItem('token')
        return{
            ...state,
            token:null,
            user:null,
            isAuthenticated:false,
            error:action.payload
        }
        case CLEAR_ERROR:
            return{
                ...state,

                error:null
            }
            case EDIT_USER:
                return{
                    ...state,
                    user:action.payload
                }
                case SAVE_USER:
                    return{
                        ...state,
                        saved:action.payload 
                    }
        default:
        return state
    }
}
export default AuthReducer