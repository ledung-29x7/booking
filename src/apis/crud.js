import axios from "../axios";

// lấy dữ liệu User
export const getUser = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:'admin/users',
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
        await axios.post('auth/signup',post)
    } catch (error) {
        reject(error)
    }
})

export const Login = (post) => new Promise(async(resolve, reject) => {
    try {
        await axios.get('auth/login',post)
        resolve()
    } catch (error) {
        reject(error)
    }
})

export const editUser = (id,put) => new Promise(async(resolve,reject) => {
    try {
        const response = await axios.put('musicgenre'+"/"+ id,put)
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

