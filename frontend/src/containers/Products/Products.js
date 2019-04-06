import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";
import {loadProducts} from "../../store/actions/products-list";
import Product from "../../components/Product/Product";


class Products extends Component {

    componentDidMount() {
        this.props.loadProducts();
    }


    render() {
        return <Fragment>
            <div className='row'>
                {this.props.products.map(product => {
                    return <div key={product.id}>
                            <Product product={product}/>
                    </div>
                })}
            </div>
        </Fragment>
    }
}

const mapStateToProps = (state) => state.products;
const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts())
});


export default connect(mapStateToProps, mapDispatchToProps)(Products);