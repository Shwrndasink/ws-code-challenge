import React, { Component } from 'react';
import data from '../data.js';
import '../styles/App.css';
import Product from '../Product/Product';

class App extends Component {
  constructor(){
    super()
    this.state = {
      items: data.groups
    }
  }
  render() {
    // Map the data and return an array of Products
    const mappedProducts = this.state.items.map((item) => 
      <Product item={item} key={item.name} />
    );
    return (
      <div className="app">
        <ul className="product-list">
          {mappedProducts}
        </ul>
      </div>
    );
  }
}

export default App;
