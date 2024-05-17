import axios from "../axios";

// lấy dữ liệu User, hotel
export const getUser = (ad) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:`admin/${ad}`,
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

//
export const getInfoEdit = (ad,id) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:`admin/${ad}/${id}`,
            method: 'GET',
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})

// lấy địa chỉ để tìm kiếm
export const getAddress = (search) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:'search/availability',
            method: 'GET',
            params: {
                city: search.city,
                checkinDate: search.checkinDate,
                checkoutDate: search.checkoutDate
            }
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})

// lấy thông tin các phòng của hotel đấy
export const getRoom = (search,id) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:`search/${id}`,
            method: 'GET',
            params: {
                checkinDate: search.checkinDate,
                checkoutDate: search.checkoutDate
            }
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})

export const GetImage = ({id}) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:`image/view/${id}`,
            method: 'GET',
            
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})

export const addUser = (post) => new Promise(async(resolve, reject) => {
    try {
        const response= await axios.post('admin/',post);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const SignUp = (post) => new Promise(async(resolve, reject) => {
    try {
        const response= await axios.post('auth/signup',post);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const Login = (post) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios.post('auth/login',post)
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const editUser = (host,id,put) => new Promise(async(resolve,reject) => {
    try {
        const response = await axios.put(`admin/${host}/${id}`,put)
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

// Get Room
export const getManager = (host) => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:`manager/${host}`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ window.sessionStorage.getItem('token')}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const editRoom = (host,id,put) => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:`manager/${host}/${id}`,
            method: "put",
            data:put,
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${ window.sessionStorage.getItem('token')}`
            }
        })

        resolve(response)
    } catch (error) {
        reject(error)
    }
})

// BOOKING
export const Booking = (bok) => new Promise(async(resolve,reject)=> {
    try {
        const response = await axios({
            url:`booking/initiate`,
            method: 'POST',
            data:bok,
            headers: {
               
                'Authorization': `Bearer ${ window.sessionStorage.getItem('token')}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
// PAYMENT
export const Payment = (pay) => new Promise(async(resolve,reject)=> {
    try {
        const response = await axios({
            url:`booking/payment`,
            method: "post",
            data:pay,
            headers: {
                'Authorization': `Bearer ${ window.sessionStorage.getItem('token')}`
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})