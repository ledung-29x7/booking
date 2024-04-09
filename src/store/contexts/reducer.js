import { ISSHOWING } from "../action/constants";

export const initState = {
    isShowing : false
}

function Reducers(state,action){
    switch (action.type) {
        case ISSHOWING :
            return{
                ...state,
                isShowing: action.type
            }
    
        default:
            return state;
    }
}
export default Reducers;