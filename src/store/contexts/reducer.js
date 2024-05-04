import { 
    ISSHOWING,
    ISSHOWINGADD, 
    ISSHOWINGEDIT, 
    ISSHOWINGLOGIN,
    EDITNDELETE,
    ISSHOWINFOROOM,
    ISSHOWFORMBOOKING
} from "../action/constants";

export const initState = {
    isSignUp : false,
    isLogin : false,
    isEdit: false,
    isAdd: false,
    id : null,
    isInforoom : false,
    isFormBooking : false
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
        case ISSHOWINFOROOM:
            return {
                ...state,
                isInforoom: action.isShow
            }
        case ISSHOWFORMBOOKING:
            return {
                ...state,
                isFormBooking: action.isShow
            }
        default:
            return state;
    }
}
export default Reducers;