import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  
  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => <ProductCard key={product.id}  product={product} />)}
      </div>
    );
  }
}

export default ProductList;
