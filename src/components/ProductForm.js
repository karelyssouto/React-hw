import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        name:'',
        description:'',
        price:0
    }
    updateName = (event) =>{
        // let oldName=this.state.name
        let newName = event.target.value

        this.setState({name: newName})
    }

    updateDescription = (event) => { 
        let newDescription = event.target.value

        this.setState({description : newDescription})
    }

    updatePrice = (event) => {
        let newPrice = event.target.value
// this.setState({price: event.target.value})
        this.setState({price : newPrice})
    }


    createNewProduct = () => {
        // console.log = (this.state)
        this.props.onCreateNewItem(this.state)
    }
    render() {
        return (
                <div>
                    
                    <h1>Add a product:</h1>
                        <input placeholder="name" name="name" type="text" value={this.state.name} onChange={this.updateName} />
                        <input placeholder="description" name="description" type="text" value={this.state.description} onChange={this.updateDescription}/>
                        <input placeholder="price" name="price" type="number" value={this.state.value} onChange={this.updatePrice}/>
                        <button onClick={this.createNewProduct} >Create New Product</button>
                    
                </div>
        );
    }
}

export default ProductForm;