import React, {Component} from 'react';


class Product extends Component {

    render() {
        if (this.props.product.categories){
            const categories =  this.props.product.categories.map(category => {return category.name})
        }
        return (
            <div className="card m-4" style={{"width": "18rem"}}>
                <img src={this.props.product.name} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.product.price}</h6>
                    <p className="card-text">{this.props.product.description}</p>
                </div>
            </div>
        )
    }
}


export default Product;