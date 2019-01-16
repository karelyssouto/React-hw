import React, { Component } from 'react';
import Product from './Product';
import ProductList from './ProductList';

class CartView extends Component {
    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <h1>{this.props.name}</h1>
                <h4>{this.props.description}</h4>
                <p>{this.props.price}</p>
            </div>
        );
    }
}

export default CartView;