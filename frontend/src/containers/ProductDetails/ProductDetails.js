import React, {Component} from 'react';
import {loadProduct} from "../../store/actions/product-details";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {CATEGORIES_URL} from "../../api-urls";
import SimpleSlider from "../../components/Slider/Slider";


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
        let categories = [];
        if (!this.props.ProductDetails.product) return null;

        if (this.props.product && this.props.product.categories) {
            categories = this.props.product.categories.map(category => {
                return category.name
            })
        }
        console.log(categories);
        return (
            <div className="card m-3" style={{"width": "40rem"}}>
                <SimpleSlider photos={this.props.ProductDetails.product.photos}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.ProductDetails.product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Цена: {this.props.ProductDetails.product.price}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Дата: {this.props.ProductDetails.product.date}</h6>
                    <p className="card-text">Описание: {this.props.ProductDetails.product.description}</p>
                    <p className="card-text">Категория: {categories}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ProductDetails: state.ProductDetails,
        auth: state.auth
    }
};

const mapDispatchProps = dispatch => {
    return {
        loadProduct: (id) => dispatch(loadProduct(id)),

    }
};
export default connect(mapStateToProps, mapDispatchProps)(ProductDetails);