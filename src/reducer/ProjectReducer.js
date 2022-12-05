import {ADD_PROJECT,DELETE_PROJECT,UPDATE_PROJECT,PROJECT_ERROR,GET_PROJECT,SAVE_PROJECT} from "../actions/types"
import {v1 as uuid} from "uuid"
const initialState = {
    project:[], 
    saved:null,
    error:null

}



    

const ProjectReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_PROJECT:
            return{
                ...state,
                project:action.payload  
    }
        case ADD_PROJECT:
          
            return{
                ...state,
                project:action.payload  
    }
    case PROJECT_ERROR:
          
        return{
            ...state,
          error:action.payload
}
case UPDATE_PROJECT:
          
    return{
        ...state,
        project:[...state.project,action.payload]
}
case SAVE_PROJECT:
          
    return{
        ...state,
        saved:action.payload
}
        default:
        return state
    }


}
export default ProjectReducer