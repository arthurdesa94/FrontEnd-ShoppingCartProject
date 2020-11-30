import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.deleteproductsList = this.deleteproductsList.bind(this);
    this.increaseproductsList = this.increaseproductsList.bind(this);
    this.decreaseproductsList = this.decreaseproductsList.bind(this);
    this.state = {
      totalPrice: 0,
      storage: JSON.parse(localStorage.getItem('productsList')),
    }
  }

  deleteproductsList({target}) {
    let newArray = [];
    const id = target.getAttribute('data-id');
    const products = JSON.parse(localStorage.getItem('productsList'));
    const findIndexInArray = products.findIndex((item) => item.id === id);
    products.forEach((item, index) => {
      if (findIndexInArray !== index) {
        newArray.push(item);
      }
    })
    localStorage.setItem('productsList', JSON.stringify(newArray));
    /* this.forceUpdate(); */
  }

  componentDidUpdate() {
    
  }

  increaseproductsList({target}) {

  }

  decreaseproductsList({target}) {
    
  }

  // sumproductsListQuantity(id, quantity) {
  //   if (!this.state[id]) {
  //     this.setState ({
  //       id: quantity,
  //     })
  //     return 1;
  //   }
  //   let quantityOfProducts = this.state[id];
  //   const newStateValue = quantityOfProducts + 1;
  //   this.setState({
  //     id: newStateValue,
  //   })
  //   return this.state[id];
  // }

  // sumproductsListPrice() {
  // }

  // sumValue() {
  // }

  render() {
    const productsList = this.state.storage;
    /* const { id, title, thumbnail, price, quantity } = productsList; */
    // const lastItem = productsList.slice(-1).pop();

    if (!productsList.length) {
      return (
        <div>
          <Link to="/">Voltar</Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div>
        <Link to="/">Voltar</Link>
        {
          productsList.map((product) => (
            <div key={ `${product.id}` }>
              <button
                data-id={product.id}
                data-title={product.title}
                data-thumbnail={product.thumbnail}
                data-price={product.price}
                data-quantity={product.quantity}
                type="button"
                onClick={this.deleteproductsList}
              >
                x
                </button>
              <img alt="Product" src={ product.thumbnail } />
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <button
                data-id={product.id}
                data-title={product.title}
                data-thumbnail={product.thumbnail}
                data-price={product.price}
                data-quantity={product.quantity}
                type="button"
                onClick={this.decreaseproductsList}
                data-testid="product-decrease-quantity"
              >
                -
                </button>
              <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
              <button
                data-id={product.id}
                data-title={product.title}
                data-thumbnail={product.thumbnail}
                data-price={product.price}
                data-quantity={product.quantity}
                type="button"
                onClick={this.increaseproductsList}
                data-testid="product-increase-quantity"
              >
                +
                </button>
              <p>{ product.price }</p>
            </div>
          ))
        }

        {/* <div>{this.sumValue()}</div> */}
        <button type="submit">Finalizar a compra</button>
      </div>
    );
  }
}

export default ShoppingCart;
