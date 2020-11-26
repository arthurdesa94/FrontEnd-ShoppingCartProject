import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
    render() {
      const { product } = this.props
      const { id, title, thumbnail, price } = product;
  
      return (
        <Link to={{path: `product/${id}`, state: [1, 2]}} className="link">
          <div className="product-card" data-testid="product">
            <h4>{title}</h4>
            <img alt="Product" src={thumbnail} />
            <p>{`R$ ${price}`}</p>
            </div>
        </Link>
      );
    }
  }
  export default ProductCard;
