import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, category_id, title, thumbnail, price } = product;

    return (
      <Link to={ `product/${category_id}/${id}` }
        className="link"
        data-testid="product-detail-link"
      >
        <div className="product-card" data-testid="product">
          <h4>{title}</h4>
          <img alt="Product" src={ thumbnail } />
          <p>{`R$ ${price}`}</p>
        </div>
      </Link>
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
