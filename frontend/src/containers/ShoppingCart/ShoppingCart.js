import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";

class ShoppingCart extends Component {

    componentDidMount() {

    }

    render() {
        return <Fragment>
            this.props.prproductsInCart.product.name
        </Fragment>
    }
}

const mapStateToProps = (state) => state.productsInCart;
const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);