import axios from "../axios";

export const getUser = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            url:'musicgenre',
            method: 'GET'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const addUser = (post) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios.post('musicgenre',post)
        resolve(response)
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

