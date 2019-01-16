import React, { Component } from 'react';
import Shop from './Shop'
import Admin from './Admin'
import CartView from './CartView';

class HomePage extends Component {
    state = {
        productList: [
            {
                name: "shovel",
                description: "screwdriver is confused",
                price: 1000
            }
        ],
        showAdmin: false,
        shoppingCart: [
        {

        }
        ]
    }

    addProduct = (newItem) => {
        //CANT DO THIS IN REACT!!!!!!!!
        //this.state.productList.push();
        //INSTEAD DO THIS:

        //get value from state
        let pList = this.state.productList;

        //modify that value
        // pList.push({
        //     name: "Sonic Screwdriver",
        //     description: "epic",
        //     price: NaN
        // });
        pList.push(newItem)

        //put that value back in
        this.setState({
            productList: pList
        });

    }

    changePage = () => {
        //get
        let showAdmin = this.state.showAdmin;

        //modify
        showAdmin = !showAdmin;

        this.setState({ showAdmin: showAdmin });
    }
    deleteProduct = (productId) =>{
        let pList = this.state.productList
        pList.splice(productId,1)
        this.setState({
            productList: pList
        })
    }
    addToCart = (product) => {
        let sCart = this.state.shoppingCart
        
        sCart.push.apply(product)

        this.setState({
            shoppingCart: sCart
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.changePage}> Change Page </button>
                
                {
                this.state.showAdmin
                ? <Admin 
                        productList={this.state.productList}
                        onCreateNewItem={this.addProduct}
                        deleteProduct={this.deleteProduct}
                    />
                : <Shop productList={this.state.productList}
                        addToCart={this.addToCart}
                />
                
                }

                <CartView 
                // productList={this.state.productList}
                />
            </div>
        );
    }
}

export default HomePage





