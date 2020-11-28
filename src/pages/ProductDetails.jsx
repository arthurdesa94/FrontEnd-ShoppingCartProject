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
    };
    this.saveStorage = this.saveStorage.bind(this);
    this.fetchProductDetail = this.fetchProductDetail.bind(this);
  }

  componentDidMount() {
    this.fetchProductDetail();
  }

  saveStorage({ target }) {
    const id = target.getAttribute('data-id');
    const title = target.getAttribute('data-title');
    const thumbnail = target.getAttribute('data-thumbnail');
    const price = target.getAttribute('data-price');
    const products = JSON.parse(localStorage.getItem('productsList'));
    const foundProducts = products.filter((product) => product.id === id);
    const quantity = foundProducts.length + 1;
    localStorage.setItem(
      'productsList', JSON.stringify(
        [...products, { id, title, thumbnail, price, quantity }],
      ),
    );
  }

  async fetchProductDetail() {
    const { match } = this.props;
    const { params } = match;
    const { category_id: categoryId } = params;
    const { id } = params;
    const reqProductDetail = await api.getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({
      loading: false,
      productDetails: reqProductDetail.results.find((product) => product.id === id),
    });
  }

  render() {
    const { productDetails, loading } = this.state;
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
          </div>
          <button
            data-id={ id }
            data-title={ title }
            data-thumbnail={ thumbnail }
            data-price={ price }
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
