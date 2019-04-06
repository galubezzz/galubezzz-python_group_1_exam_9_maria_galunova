import {PRODUCT_ADD} from "../actions/shopping-cart";

const initialState = {
    productsInCart: [],
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {...state, productsInCart: [...state.productsInCart, action.product]};
        default:
            return state;
    }
};

export default shoppingCartReducer;