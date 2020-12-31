import callApi from "./api";
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/MonAn', 'GET', null)
            .then(res => {
                dispatch(GetAllProduct(res.data));
            });
    }
}

export const GetAllProduct = (payload) => {
    return{
        type:'GET_ALL_PRODUCT',
        payload
    }
}
