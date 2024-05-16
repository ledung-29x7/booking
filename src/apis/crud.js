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

export const addUser = (post) => new Promise(async(resolve, reject) => {
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
// manger
export const getUserRoom = (ad) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:`manager/${ad}`,
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const editUserRoom = (host,id,put) => new Promise(async(resolve,reject) => {
    try {
        const response = await axios.put(`manager/${host}/${id}`,put)
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
// contact
export const addContact = (post) => new Promise(async(resolve, reject) => {
    try {
        const response= await axios.post('contact',post);
        resolve(response)
    } catch (error) {
        reject(error)
    }
})