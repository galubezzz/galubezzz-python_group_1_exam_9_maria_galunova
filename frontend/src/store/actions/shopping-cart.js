import axios, {PRODUCTS_URL} from "../../api-urls";


export const PRODUCT_ADD = "PRODUCT_ADD";


export const addProduct = (id) => {
    return dispatch => {
        axios.get(PRODUCTS_URL + id)
            .then(response => {
                console.log('==========', response.data);
                return dispatch({type: PRODUCT_ADD, product: response.data});
            })
            .catch(error => console.log(error));
    }
};