import {PRODUCT_REQUEST_SUCCESS} from "../actions/product-details";

const initialState = {
    product: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST_SUCCESS:
            return {...state, product: action.product};
        default:
            return state;
    }
};

export default productReducer;