import React, { Component } from 'react';
import Product from './Product';
import ProductList from './ProductList';

class CartView extends Component {
    render() {
        return (
            <div>
                <h1>Shopping Cart</h1>
                {/* <ProductList 
                    productList={this.props.productList}
                    showDelete={false}
                    // addToCart={this.props.addToCart}
                /> */}
            </div>
        );
    }
}

export default CartView;