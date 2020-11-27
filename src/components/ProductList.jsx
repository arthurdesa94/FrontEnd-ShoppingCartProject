import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
        { products.map((product) => <ProductCard key={product.id} product={product} />) }
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ProductList;
