import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  // constructor() {
  //   super();
  //   this.deleteItem = this.deleteItem.bind(this);
  //   this.increaseItem = this.increaseItem.bind(this);
  //   this.decreaseItem = this.decreaseItem.bind(this);
  //   this.sumItems = this.sumItems.bind(this);
  //   this.sumValue = this.sumValue.bind(this);
  //   this.state = {
  //     totalPrice: 0,
  //     list: {
  //     },
  //   };
  // }

  // deleteItem() {

  // }

  // increaseItem() {

  // }

  // decreaseItem() {

  // }

  // sumItems() {

  // }

  // sumValue() {

  // }

  render() {
    // const productsList = JSON.parse(localStorage.getItem('productsList'));

    // if (productsList.length === 0) {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
    // }

    // return (
    //   <div>
    //     { productsList.map((item) =>
    //       (<div key={ item.id }>
    //         <button type="button">x</button>
    //         <img alt="Product" src={ item.thumbnail } />
    //         <p>{ item.title }</p>
    //         <button type="button">-</button>
    //         <p>{ this.sumItems(item.id) }</p>
    //         <button type="button">+</button>
    //         <p>{ item.value }</p>
    //       </div>)) }
    //     <div>{ this.sumValue() }</div>
    //     <button type="submit">Finalizar a compra</button>
    //   </div>
    // );
  }
}

export default ShoppingCart;
