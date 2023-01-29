import { LOGIN, LOGOUT } from "./types";


export const userLogin=(email,password)=>{
    // api call
   
    return {
        type:LOGIN,
        payload:{
            logged:true,
            token:null,
            user:null,
        }
    }
};
export const userLogout=()=>{
    return {
        type:LOGOUT,
        payload:{
            logged:false,
            token:null,
            user:null,
        }
    }
};