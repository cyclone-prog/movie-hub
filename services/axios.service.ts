import axios from "axios"
const BASE_URL = 'https://api.escuelajs.co/api/v1/'
export const postData =async (url:any,data:any) =>{
    const resp = await axios.post(BASE_URL+url);
    console.log(resp);
    return resp; 
}