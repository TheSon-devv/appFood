import callApi from "./api";

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
export const GET_ALL_MON_LAU = 'GET_ALL_MON_LAU';
export const GET_ALL_MON_PIZZA = 'GET_ALL_MON_PIZZA';
export const GET_ALL_MON_BUFFET= 'GET_ALL_MON_BUFFET';
export const GET_NUMBER_CART = 'GET_NUMBER_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';



export const monAnHOT = () => {
    return (dispatch) => {
        return callApi('MonAnHot', 'GET', null).then(res => {
            dispatch(GetAllMonAnHOT(res.data));
        });
    }
}

export const monAnLau = () => {
    return (dispatch) => {
        return callApi('MonAnLau', 'GET', null).then(res => {
            dispatch(GetAllMonAnLau(res.data));
        });
    }
}

export const monAnPizza = () => {
    return (dispatch) => {
        return callApi('MonAnPizza', 'GET', null).then(res => {
            dispatch(GetAllMonPizza(res.data));
        });
    }
}

export const monAnBuffet = () => {
    return (dispatch) => {
        return callApi('MonAnBuffet', 'GET', null).then(res => {
            dispatch(GetAllMonBuffet(res.data));
        });
    }
}

/*GET_ALL_PRODUCT*/
export function GetAllMonAnHOT(payload) {
    return {
        type: 'GET_ALL_PRODUCT',
        payload
    }
}

/*GET_ALL_LAU*/
export function GetAllMonAnLau(payload) {
    return {
        type: 'GET_ALL_MON_LAU',
        payload
    }
}

/*GET_ALL_PIZZA*/
export function GetAllMonPizza(payload) {
    return {
        type: 'GET_ALL_MON_PIZZA',
        payload
    }
}

/*GET_ALL_BUFFET*/
export function GetAllMonBuffet(payload) {
    return {
        type: 'GET_ALL_MON_BUFFET',
        payload
    }
}

/*GET NUMBER CART*/
export function GetNumberCart() {
    return {
        type: "GET_NUMBER_CART"
    };
}

export function AddCart(payload) {
    return {
        type: "ADD_CART",
        payload
    };
}
export function UpdateCart(payload) {
    return {
        type: "UPDATE_CART",
        payload
    };
}
export function DeleteCart(payload) {
    return {
        type: "DELETE_CART",
        payload
    };
}

export function IncreaseQuantity(payload) {
    return {
        type: "INCREASE_QUANTITY",
        payload
    };
}
export function DecreaseQuantity(payload) {
    return {
        type: "DECREASE_QUANTITY",
        payload
    };
}