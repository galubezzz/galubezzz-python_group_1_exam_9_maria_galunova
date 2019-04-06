import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";
import Product from "../../components/Product/Product";

class ShoppingCart extends Component {

    componentDidMount() {

    }

    render() {
        if (!this.props.productsInCart) return null;
        return <Fragment>
            {this.props.productsInCart.map(product => {
                return <div key={product.id}>
                        <Product product={product}/>
                    </div>
            })}
        </Fragment>
    }
}

const mapStateToProps = (state) => state.productsInCart;
const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);