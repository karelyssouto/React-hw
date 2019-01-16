import React, { Component } from 'react';
import ProductList from './ProductList';

class Shop extends Component {

    render() {
        return (
            <div>
                <h1>Shop</h1>
                <ProductList 
                productList={this.props.productList}
                showDelete = {false}
                addToCart={this.props.addToCart}
                />

            </div>
        );
    }
}

export default Shop;