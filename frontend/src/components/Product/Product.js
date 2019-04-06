import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Product extends Component {

    render() {
        if (!this.props.product) return null;
        if (this.props.product && this.props.product.categories){
            const categories =  this.props.product.categories.map(category => {return category.name})
        }
        const link = "/products/" + this.props.product.id;
        return (
            <div className="card m-4" style={{"width": "18rem"}}>
                <img src={this.props.product.name} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <NavLink className="nav-link card-title h5 text-dark p-0"
                             to={link}>{this.props.product.name}</NavLink>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.product.price}</h6>
                    <p className="card-text">{this.props.product.description}</p>
                </div>
            </div>
        )
    }
}


export default Product;