import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";
import Product from "../../components/Product/Product";

class ShoppingCart extends Component {

    componentDidMount() {

    }

    render() {
        if (!this.props.productsInCart) return null;
        return <Fragment>
            Вы выбрали:
            {this.props.productsInCart.map(product => {
                return <div key={product.id}>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-subtitle mb-2 text-muted">Цена: {product.price}</p>
                    <hr/>
                    </div>
            })}
        </Fragment>
    }
}

const mapStateToProps = (state) => state.productsInCart;
const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);