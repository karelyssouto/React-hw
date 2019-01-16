import React, { Component } from 'react';

class Product extends Component {
    deleteProduct =(event) =>{
        this.props.deleteProduct(this.props.productId)
    }
    addToCart = (event) => {
        this.props.addToCart(this.props.productId)
    }

    render() {
        return (
            <div>
                <h1>{this.props.productName}</h1>
                <h4>{this.props.productDescription}</h4>
                <p>{this.props.productPrice}</p>
                {this.props.showDelete
                ? <button onClick={this.deleteProduct}>Delete</button>
                :null
                }
                <button onClick={this.addToCart}>Add to Cart</button>
            </div>
        );
    }
}

export default Product;