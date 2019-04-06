import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";

import Product from "../../components/Product/Product";

import Select from 'react-select';

class ShoppingCart extends Component {

    componentDidMount() {

    }

    render() {
        return <Fragment>
        </Fragment>
    }
}

const mapStateToProps = (state) => state.products;
const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);