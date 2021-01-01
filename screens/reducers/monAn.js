import { GET_ALL_PRODUCT, GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../actions/monAn';

const initMonAn = {
    numberCart: 0,
    Carts: [],
    monAns: []
}

const monAn = (state = initMonAn, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                monAns: [...action.payload]
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    maMA: action.payload.maMA,
                    quantity: 1,
                    tenMA: action.payload.tenMA,
                    priceMA: action.payload.priceMA,
                    imgFood: action.payload.imgFood
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item, index) => {
                    if (item.maMA === action.payload.maMA) {
                        state.Carts[index].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        maMA: action.payload.maMA,
                        quantity: 1,
                        tenMA: action.payload.tenMA,
                        priceMA: action.payload.priceMA,
                        imgFood: action.payload.imgFood
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++; 
            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity
            if(quantity > 1){
                state.numberCart--
                state.Carts[action.payload].quantity--; 
            }
            return {
                ...state
            }
        case DELETE_CART:
            let _quantity = state.Carts[action.payload].quantity;
            return{
                ...state,
                numberCart : state.numberCart - _quantity,
                Carts: state.Carts.filter(item => {
                    return item.maMA != state.Carts[action.payload].maMA
                })
            }
        default:
            return state;
    }
}
export default monAn;