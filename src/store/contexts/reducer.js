import { 
    ISSHOWING,
    ISSHOWINGADD, 
    ISSHOWINGEDIT, 
    ISSHOWINGLOGIN,
    EDITNDELETE,
    ISSHOWINFOROOM,
    ISSHOWFORMBOOKING,
    GETSEARCH,
    GETIDROOM,
    GETDATAUSER,
    ISSUCCESSFULL,
    GETPRICEROOM,
    PRICEROOMSINGLE,
    PRICEROOMDOUBLE,
    PRICEROOMFAMILY,
    CHECKINDATE,
    CHECKOUTDATE,
    COUNTROOM,
    CHECKLOGIN
} from "../action/constants";

export const initState = {
    isSignUp : false,
    isLogin : false,
    isEdit: false,
    isAdd: false,
    idEdit : null,
    isInforoom : false,
    isFormBooking : false,
    isSuccessfull: false,
    getSearch : null,
    getIdRoom: null,
    getData: [],
    getPriceRoom: 0,
    priceRoomS: 0,
    priceRoomD: 0,
    priceRoomF: 0,
    checkin : "",
    checkout : "",
    countNType: {},
    checkLogin: false,
}

function Reducers(state,action){
    switch (action?.type) {
        case ISSHOWING : // OPEN FORM SIGNUP
            return {
                ...state,
                isSignUp: action.isShow
            }
        case ISSHOWINGLOGIN : //OPE FORM LOGIN
            return {
                ...state,
                isLogin: action.isShowLogin
            }
        case ISSHOWINGEDIT : // OPEN FORM EDIT
            return {
                ...state,
                isEdit: action.showEdit
            }
        case ISSHOWINGADD : //OPEN FORM MODAL ADD
            return {
                ...state,
                isAdd: action.showAdd
            }
        case EDITNDELETE : // ID  EDIT
            return {
                ...state,
                idEdit: action.id
            }
        case ISSHOWINFOROOM: //OPEN INFO ROOM
            return {
                ...state,
                isInforoom: action.isShow
            }
        case ISSHOWFORMBOOKING: //OPEN FORM BOOKING
            return {
                ...state,
                isFormBooking: action.isShow
            }
        case ISSUCCESSFULL: // OPEN ALERT SUCCERSSFULL
            return {
                ...state,
                isSuccessfull: action.isSucc
            }
        case GETSEARCH: // GET INFO ENTERED SEARCH
            return {
                ...state,
                getSearch: action.search
            }
        case GETIDROOM: // GET ID ROOM
            return {
                ...state,
                getIdRoom: action.id
            }
        case GETDATAUSER: // GET ID user
            return {
                ...state,
                getData : action.resul
            }
        case GETPRICEROOM: // Get token Authorization
            return {
                ...state,
                getPriceRoom: action.price 
            }
        case PRICEROOMSINGLE: // get PRICE room Single
            return {
                ...state,
                priceRoomS: action.priceS
            }
        case PRICEROOMDOUBLE: // get Price room Double
            return {
                ...state,
                priceRoomD: action.priceD
            }
        case PRICEROOMFAMILY: // get Price room Family
            return {
                ...state,
                priceRoomF: action.priceF
            }
        case CHECKINDATE: //get Checkin Date
            return {
                ...state,
                checkin: action.date
            }
        case CHECKOUTDATE: //get CheckOUT Date
            return {
                ...state,
                checkout: action.date
            }
        case COUNTROOM:
            return {
                ...state,
                countNType: action.countNtype
            }
        case CHECKLOGIN:
            return {
                ...state,
                checkLogIn: action.blo
            }
        default:
            return state;
    }
}
export default Reducers;