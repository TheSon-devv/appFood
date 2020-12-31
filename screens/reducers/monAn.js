import { GET_ALL_PRODUCT } from '../actions/monAn';

const initProduct = {
    product: []
}

const monAn = (state = initProduct, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}
export default monAn ;