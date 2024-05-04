import { 
    ISSHOWING,
    ISSHOWINGLOGIN,
    ISSHOWINGEDIT,
    ISSHOWINGADD,
    EDITNDELETE,
    ISSHOWINFOROOM,
    ISSHOWFORMBOOKING
} from "./constants"

// modal SignUp, Login
export const Modal = (isShow) => {
    return {
        type : ISSHOWING,
        isShow
    }
}

export const ModalLogin = (isShowLogin) => {
    return {
        type : ISSHOWINGLOGIN,
        isShowLogin
    }
}

// Modal Admin Edit User, Add User
export const ModalEdit =  (showEdit) => {
    return{
        type : ISSHOWINGEDIT,
        showEdit
    }
}

export const ModalAdd = (showAdd) => {
    return{
        type : ISSHOWINGADD,
        showAdd
    }
}

// Edit and delete
export const getIdEND = (id) => {
    return {
        type : EDITNDELETE,
        id
    }
}

// Informatin Room
export const ModalInforRoom = (isShow) =>{
    return {
        type : ISSHOWINFOROOM,
        isShow
    }
}

// Form Booking
export const ModalFormBooking = (isShow) =>{
    return {
        type : ISSHOWFORMBOOKING,
        isShow
    }
}