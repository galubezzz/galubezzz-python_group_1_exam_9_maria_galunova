import React, {Fragment, Component} from 'react'
import {connect} from "react-redux";
import {loadProducts} from "../../store/actions/products-list";
import Product from "../../components/Product/Product";
import axios from "axios";
import {CATEGORIES_URL} from "../../api-urls";
import Select from 'react-select';

class Products extends Component {
    state = {
        category: [],
        selectedOption: null,
    };

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
        this.props.loadProducts();
    }

    componentDidMount() {
        this.props.loadProducts();
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

    componentDidUpdate() {

    }

    render() {
        let options = this.state.category.map(category => {
            return {value: category.id, label: category.name}
        });
        const {selectedOption} = this.state;
        return <Fragment>
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
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