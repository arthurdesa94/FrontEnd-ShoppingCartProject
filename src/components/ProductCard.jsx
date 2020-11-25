import React from 'react';
class ProductCard extends React.Component {
    render() {
      const { product } = this.props
      const { id, title, thumbnail, price } = product;
  
      return (
        <div className="product-card" key={id} data-testid="product">
          <img alt="Product" src={thumbnail} />
          <div className="product-card-body">
            <h4 >{title}</h4>
            <h4 >{price}</h4>
          </div>
        </div>
      );
    }
  }
  export default ProductCard;
