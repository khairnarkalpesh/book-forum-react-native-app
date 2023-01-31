import { LOGIN, LOGOUT, SIGNUP } from "./types";
import axios from "axios";


export const userLogin = (email, password) => {
    console.log('called api');
    let token = '';
    var data = JSON.stringify({
        email: email,
        password: password
    });

    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/v1/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return {
                type: LOGIN,
                payload: {
                    logged: true,
                    token: response.data.token,
                    user: email,
                }
            }
        })
        .catch(function (error) {
            console.log("error in backend ", error);
            return {
                type: LOGIN,
                payload: {
                    logged: true,
                    token: null,
                    user: email,
                }
            }
        });
    return {
        type: LOGIN,
        payload: {
            logged: true,
            token: null,
            user: null,
        }
    }
};
export const userLogout = () => {
    return {
        type: LOGOUT,
        payload: {
            logged: false,
            token: null,
            user: null,
        }
    }
};
export const signup = () => {
    return {
        type: SIGNUP,
        payload: {
            logged: true,
            token: null,
            user: null,
        }
    }
};