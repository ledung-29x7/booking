import * as apis from "../../apis"
import { GETDATAUSER } from "./constants";

// Get apis User
export const getData = async(host) =>{
    try {
        const response = await apis.getUser(host)
        if(response.status === 200){
            return response
        }
        return{
            response: []
        }
    } catch (error) {
        return{
            response: []
        }
    }
}
export const GetDataUser = (resul) =>{
    console.log(resul)
    return{
        type: GETDATAUSER,
        resul
    }
}// End apis user

