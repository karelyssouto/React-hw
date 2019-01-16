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
    addToCart = (productId) => {
        let sCart = this.state.sCart
        
        sCart.push(productId)

        this.setState({
            sCart: sCart
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

            
                {/* {this.state.cart.map((product,i)=>{
                    return(
                        <CartView 
                            key={i}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            productId={i}
                        />
                    )
                })} */}
            

            </div>
        );
    }
}

export default HomePage





