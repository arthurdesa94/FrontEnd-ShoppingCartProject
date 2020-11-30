import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.saveStorage = this.saveStorage.bind(this);
  }

  saveStorage({ target }) {
    let price = (parseFloat(target.getAttribute('data-price'))).toFixed(2);
    const id = target.getAttribute('data-id');
    const title = target.getAttribute('data-title');
    const thumbnail = target.getAttribute('data-thumbnail');
    const products = JSON.parse(localStorage.getItem('productsList'));
    const findIndexInArray = products.findIndex((item) => item.id === id);
    if (findIndexInArray !== -1) {
      products[findIndexInArray].quantity += 1;
      price = price * products[findIndexInArray].quantity;
      products[findIndexInArray].price = price;
      localStorage.setItem('productsList', JSON.stringify([...products]));
    } else {
      const quantity = 1;
      localStorage.setItem('productsList', JSON.stringify(
        [...products, { id, title, thumbnail, price, quantity }],
      ));
    }
  }

  render() {
    const { product } = this.props;
    const { category_id: categoryId } = product;
    const { id, title, thumbnail, price } = product;

    return (
      <div>
        <Link
          to={ `product/${ categoryId }/${ id }` }
          className="link"
          data-testid="product-detail-link"
        >
          <div className="product-card" data-testid="product">
            <h4>{ title }</h4>
            <img alt="Product" src={ thumbnail } />
            <p>{ `R$ ${ price }` }</p>
          </div>
        </Link>
        <button
          data-id={ id }
          data-title={ title }
          data-thumbnail={ thumbnail }
          data-price={ price }
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
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }),
}.isRequired;

export default ProductCard;
