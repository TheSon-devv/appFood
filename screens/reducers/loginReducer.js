import {SET_LOGIN_STATE} from "../actions/loginReducer";

const initLogin = {
    isLogin: true
}

const loginReducer = (state = initLogin, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default loginReducer;