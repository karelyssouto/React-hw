import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <div>
                {this.props.productList.map((product, i) =>{
                    return (<Product
                        key={i}
                        productName={product.name}
                        productDescription={product.description}
                        productPrice={product.price}
                        deleteProduct={this.props.deleteProduct}
                        productId={i}
                        showDelete ={this.props.showDelete}
                        // addToCart={this.props.addToCart}
                    /> ) 
                    })}

            </div>
        );
    }
}

export default ProductList;