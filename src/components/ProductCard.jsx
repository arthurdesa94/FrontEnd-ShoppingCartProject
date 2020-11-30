import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.saveStorage = this.saveStorage.bind(this);
    // this.mergeArray = this.mergeArray.bind(this);
  }

  saveStorage({ target }) {
    const id = target.getAttribute('data-id');
    const title = target.getAttribute('data-title');
    const thumbnail = target.getAttribute('data-thumbnail');
    const products = JSON.parse(localStorage.getItem('productsList'));
    const foundProducts = products.filter((product) => product.id === id);
    const quantity = foundProducts.length + 1;
    let price = parseFloat(target.getAttribute('data-price'));
    // const xablau = this.mergeArray(target, ...products);
    // console.log("Found Products", foundProducts)
    // console.log("mergeArray", xablau);

    if (!products.length) {
      localStorage.setItem('productsList', JSON.stringify(
        [...products, { id, title, thumbnail, price, quantity }],
      ));
    } else {
      const priceFound = parseFloat(target.getAttribute('data-price'));
      const priceArray = foundProducts.map((product) => product.price);
      const incrementPrice = [...priceArray, priceFound];
      price = incrementPrice.reduce((acc, nextValue) => acc + nextValue);
      // const { id, title, thumbnail, price, quantity } = lastItem;
      // const lastItem = foundProducts[foundProducts.length - 1];
      // console.log(lastItem);

      localStorage.setItem(
        'productsList', JSON.stringify(
          [...products, { id, title, thumbnail, price, quantity }],
        ),
      );
    }
  }

  // mergeArray(target, ...products) {
  //   return [products, target].reduce((acc, product) => {
  //     const { id, title, thumbnail, price, quantity } = product;
  //     console.log()
  //     const elementId = acc.findIndex(element => element.id === id);
  //     if (elementId !== -1) {
  //       acc[elementId].quantity += quantity;
  //     } else {
  //       acc.push({
  //         id,
  //         title,
  //         thumbnail,
  //         price,
  //         quantity,
  //       });
  //     }
  //     return acc;
  //   }, []);
  // }

  render() {
    const { product } = this.props;
    const { category_id: categoryId } = product;
    const { id, title, thumbnail, price } = product;

    return (
      <div>
        <Link
          to={ `product/${categoryId}/${id}` }
          className="link"
          data-testid="product-detail-link"
        >
          <div className="product-card" data-testid="product">
            <h4>{ title }</h4>
            <img alt="Product" src={ thumbnail } />
            <p>{ `R$ ${price}` }</p>
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
