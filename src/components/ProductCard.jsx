import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.saveStorage = this.saveStorage.bind(this);
  }

  saveStorage({ target }) {
    const oneNegative = -1;
    const twoPositive = 2;
    let price = (parseFloat(target.getAttribute('data-price'))).toFixed(twoPositive);
    const id = target.getAttribute('data-id');
    const title = target.getAttribute('data-title');
    const thumbnail = target.getAttribute('data-thumbnail');
    const availableQuantity = (
      parseInt(target.getAttribute('data-available-quantity'), 10)
    );
    const products = JSON.parse(localStorage.getItem('productsList'));
    const findIndexInArray = products.findIndex((item) => item.id === id);
    if (findIndexInArray !== oneNegative) {
      products[findIndexInArray].quantity += 1;
      price *= products[findIndexInArray].quantity;
      products[findIndexInArray].price = price;
      localStorage.setItem('productsList', JSON.stringify([...products]));
    } else {
      const quantity = 1;
      localStorage.setItem('productsList', JSON.stringify(
        [...products, { id, title, thumbnail, price, quantity, availableQuantity }],
      ));
    }
  }

  render() {
    const { product } = this.props;
    const { category_id: categoryId } = product;
    const { available_quantity: availableQuantity } = product;
    const { id, title, thumbnail, price, shipping } = product;
    const { free_shipping: freeShipping } = shipping;

    return (
      <div>
        <Link
          to={ `product/${categoryId}/${id}` }
          className="link"
          data-testid="product-detail-link"
        >
          <div className="product-card" data-testid="product">
            <h4>{ title }</h4>
            { freeShipping ? <p data-testid="free-shipping">Frete Grátis</p> : null }
            <img alt="Product" src={ thumbnail } />
            <p>{ `R$ ${price}` }</p>
          </div>
        </Link>
        <button
          data-id={ id }
          data-title={ title }
          data-thumbnail={ thumbnail }
          data-price={ price }
          data-available-quantity={ availableQuantity }
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.saveStorage }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
    availableQuantity: number,
  }),
}.isRequired;

export default ProductCard;
