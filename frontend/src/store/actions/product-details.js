import axios, {PRODUCTS_URL} from "../../api-urls";


export const PRODUCT_REQUEST_SUCCESS = "PRODUCT_LIST_REQUEST_SUCCESS";


export const loadProduct = (id) => {
    return dispatch => {
        axios.get(PRODUCTS_URL + id)
            .then(response => {
                console.log(response.data);
                return dispatch({type: PRODUCT_REQUEST_SUCCESS, product: response.data});
            })
            .catch(error => console.log(error));
    }
};