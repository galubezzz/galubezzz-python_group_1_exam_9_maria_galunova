import React, {Component} from 'react';
import {loadProduct} from "../../store/actions/product-details";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {CATEGORIES_URL} from "../../api-urls";

class ProductDetails extends Component {

    state = {
        category: []
    };

    componentDidMount() {
        this.props.loadProduct(this.props.match.params.id);
        axios.get(CATEGORIES_URL)
            .then(response => {
                const category = response.data;
                console.log(category);
                // и сохраняем их в state
                this.setState(prevState => {
                    let newState = {...prevState};
                    newState.category = category;
                    return newState;
                });
            })
            .catch(error => {
                console.log(error);
                console.log(error.response)
            });
    }

    render() {
        const categories = [];
        if (!this.props.product) return null;

        if (this.props.product && this.props.product.categories) {
            categories = this.props.product.categories.map(category => {
                return category.name
            })
        }
        const product = {...this.props.product};
        return (
            <div className="card m-3" style={{"width": "30rem"}}>
                <img src={product.photo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Цена: {product.price}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Дата окончания показа: {product.date}</h6>
                    <p className="card-text">Описание: {product.description}</p>
                    <p className="card-text">Категория: {categories}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
        auth: state.auth
    }
};

const mapDispatchProps = dispatch => {
    return {
        loadProduct: (id) => dispatch(loadProduct(id)),

    }
};
export default connect(mapStateToProps, mapDispatchProps)(ProductDetails);