import { 
    ISSHOWING,
    ISSHOWINGADD, 
    ISSHOWINGEDIT, 
    ISSHOWINGLOGIN,
    EDITNDELETE
} from "../action/constants";

export const initState = {
    isSignUp : false,
    isLogin : false,
    isEdit: false,
    isAdd: false,
    id : null,
}

function Reducers(state,action){
    switch (action.type) {
        case ISSHOWING :
            return {
                ...state,
                isSignUp: action.isShow
            }
        case ISSHOWINGLOGIN :
            return {
                ...state,
                isLogin: action.isShowLogin
            }
        case ISSHOWINGEDIT :
            return {
                ...state,
                isEdit: action.showEdit
            }
        case ISSHOWINGADD :
            return {
                ...state,
                isAdd: action.showAdd
            }
        case EDITNDELETE :
            return {
                ...state,
                id: action.id
            }
        default:
            return state;
    }
}
export default Reducers;