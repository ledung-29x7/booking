import { 
    ISSHOWING,
    ISSHOWINGADD, 
    ISSHOWINGEDIT, 
    ISSHOWINGLOGIN,
    EDITNDELETE,
    ISSHOWINFOROOM,
    ISSHOWFORMBOOKING,
    GETSEARCH
} from "../action/constants";

export const initState = {
    isSignUp : false,
    isLogin : false,
    isEdit: false,
    isAdd: false,
    id : null,
    isInforoom : false,
    isFormBooking : false,
    getSearch : null,
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
        case GETSEARCH:
            return {
                ...state,
                getSearch: action.search
            }
        default:
            return state;
    }
}
export default Reducers;