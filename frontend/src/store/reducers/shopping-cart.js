import {PRODUCT_LIST_REQUEST_SUCCESS} from "../actions/products-list";

const initialState = {
    productsInCart: [],
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {...state, productsInCart: action.product};
        default:
            return state;
    }
};

export default shoppingCartReducer;