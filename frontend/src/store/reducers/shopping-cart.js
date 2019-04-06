import {PRODUCT_ADD} from "../actions/shopping-cart";
import {LOGOUT} from "../actions/logout";

const getCartFromLocalStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('cart')) || []
    } catch (e) {
        return []
    }

};

const initialState = {
    productsInCart: getCartFromLocalStorage(),
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            let productsInCart = [...state.productsInCart, action.product];
            localStorage.setItem('cart', JSON.stringify(productsInCart));
            return {...state, productsInCart: productsInCart};
        case LOGOUT:
            return {...state, productsInCart: []};
        default:
            return state;
    }
};

export default shoppingCartReducer;