import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import shoppingCart from '../img/shopping-cart.png';
import Evaluation from '../components/Evaluation';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      productDetails: [],
      freeShipping: false,
    };
    this.saveStorage = this.saveStorage.bind(this);
    this.fetchProductDetail = this.fetchProductDetail.bind(this);
  }

  componentDidMount() {
    this.fetchProductDetail();
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


  async fetchProductDetail() {
    const { match } = this.props;
    const { params } = match;
    const { category_id: categoryId } = params;
    const { id } = params;
    const reqProductDetail = await api.getProductsFromCategoryAndQuery(categoryId, '');
    const detailedProduct = reqProductDetail.results.find((product) => product.id === id);
    const { shipping: { free_shipping: freeShipping } } = detailedProduct;

    if (freeShipping) {
      this.setState({
        loading: false,
        productDetails: reqProductDetail.results.find((product) => product.id === id),
        freeShipping: true,
      });
    } else {
      this.setState({
        loading: false,
        productDetails: reqProductDetail.results.find((product) => product.id === id),
        freeShipping: false,
      });
    }
  }

  render() {
    const { productDetails, loading, freeShipping } = this.state;
    const { available_quantity: availableQuantity } = productDetails;
    const { id, title, thumbnail, price } = productDetails;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } alt="Shopping Cart Icon" />
        </Link>
        <div>
          <img alt="Product" src={ thumbnail } />
          <div className="movie-card-body">
            <p data-testid="product-detail-name">{`Nome do Produto: ${title}`}</p>
            <p>{`Preço: R$ ${price}`}</p>
            <p>{`Quatidade Disponível: ${availableQuantity}`}</p>
            { freeShipping ? <p data-testid="free-shipping">Frete Grátis</p> : null }
          </div>
          <button
            data-id={ id }
            data-title={ title }
            data-thumbnail={ thumbnail }
            data-price={ price }
            data-available-quantity={ availableQuantity }
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.saveStorage }
          >
            Adicionar ao carrinho
          </button>
          <Evaluation />
          {/* productId={id} */}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      category_id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
