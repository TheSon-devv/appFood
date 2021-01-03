import callApi from "./api";

export const SET_LOGIN_STATE = "SET_LOGIN_STATE"

export const login = () => {
    return (dispatch) => {
        return callApi('login','POST',{username,password})
    }
}

const setLoginState = (payload) => {
    return {
        type: 'SET_LOGIN_STATE',
        payload
    };
}