import { LOGIN, LOGOUT } from "../types";

const initialState={
    logged:false,
    token:null,
    user:null,
};

const applyLogin=(state,payload)=>{
    console.log('logged');
    return {
        ...state,
        logged:true,
        token:payload.token,
        user:payload.email,
    }
}
const applyLogout=(state,payload)=>{
    return {
        ...state,
        logged:false,
        token:null,
        user:null,
    }
}

export const loginreducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case LOGIN:
            return applyLogin(state,action.payload);
        case LOGOUT:
            return applyLogout();
        default:
            return state;
    }
};