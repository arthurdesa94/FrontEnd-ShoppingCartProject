import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  // constructor() {
  //   super();
  //   this.deleteproductsList = this.deleteproductsList.bind(this);
  //   this.increaseproductsList = this.increaseproductsList.bind(this);
  //   this.decreaseproductsList = this.decreaseproductsList.bind(this);
  //   this.sumproductsListQuantity = this.sumproductsListQuantity.bind(this);
  //   this.sumproductsListPrice = this.sumproductsListPrice.bind(this);
  //   this.sumValue = this.sumValue.bind(this);
  //   this.state = {
  //     totalPrice: 0,
  //     list: [],
  //   }
  // }

  // deleteproductsList() {

  // }

  // increaseproductsList() {

  // }

  // decreaseproductsList() {

  // }

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
    const productsList = JSON.parse(localStorage.getItem('productsList'));
    // const { id } = productsList;
    // const lastItem = productsList.slice(-1).pop();

    if (!productsList.length) {
      return (
        <div>
          <Link to="/">Voltar</Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }


    // if (productsList.id === id) {
    //   return (
    //     <div>
    //       <Link to="/">Voltar</Link>
    //       <div key={ lastItem.id }>
    //         <button type="button">x</button>
    //         <img alt="Product" src={ lastItem.thumbnail } />
    //         <p data-testid="shopping-cart-product-name">{ lastItem.title }</p>
    //         <button type="button">-</button>
    //         <p data-testid="shopping-cart-product-quantity">{ lastItem.quantity }</p>
    //         <button type="button">+</button>
    //         <p>{ lastItem.price }</p>
    //       </div>
    //     </div>
    //   )
    // }

    return (
      <div>
        <Link to="/">Voltar</Link>
        {
          productsList.map((product) => (
            <div key={ product.id }>
              <button type="button">x</button>
              <img alt="Product" src={ product.thumbnail } />
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <button type="button" data-testid="product-decrease-quantity">-</button>
              <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
              <button type="button" data-testid="product-increase-quantity">+</button>
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
