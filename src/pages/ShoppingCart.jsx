import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.deleteItem = this.deleteItem.bind(this);
    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
    this.sumItemQuantity = this.sumItemQuantity.bind(this);
    this.sumItemPrice = this.sumItemPrice.bind(this);
    this.sumValue = this.sumValue.bind(this);
    this.state = {
      totalPrice: 0,
      list: [],
    }
  }

  deleteItem() {

  }

  increaseItem() {

  }

  decreaseItem() {
    
  }

  sumItemQuantity(id, quantity) {
    if (!this.state[id]) {
      this.setState ({
        id: quantity,
      })
      return 1;
    }
    let quantityOfProducts = this.state[id];
    const newStateValue = quantityOfProducts + 1;
    this.setState({
      id: newStateValue,
    })
    return this.state[id];
  }

  sumItemPrice() {

  }

  sumValue() {

  }

  render() {
    const productsList = JSON.parse(localStorage.getItem('productsList'));

    if (productsList.length === 0) {
      return (
        <div>
          <Link to="/">Voltar</Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div>
        {productsList.map((item) => 
          <div key={item.id}>
            <button type="button">x</button>
            <img key={"picture"} alt="Product" src={item.thumbnail} />
            <p key={"title"} data-testid="shopping-cart-product-name">{item.title}</p>
            <button type="button">-</button>
            <p key={"quantity"} data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <button type="button">+</button>
            <p key={"price"}>{this.sumItemPrice(item.price)}</p>
          </div>
        )}
        <div>{this.sumValue()}</div>
        <button type="submit">Finalizar a compra</button>
      </div>
    )
  }
}

export default ShoppingCart;
