import React from 'react';
import { Link } from 'react-router-dom';

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

export default ProductCard;
