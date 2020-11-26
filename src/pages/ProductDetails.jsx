import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import shoppingCart from '../img/shopping-cart.png';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      productDetails: [],
    };

    this.fetchProductDetail = this.fetchProductDetail.bind(this);
  }

  componentDidMount() {
    this.fetchProductDetail();
  }

  async fetchProductDetail() {
    const { id, category_id } = this.props.match.params;
    const requestProductDetail = await api.getProductsFromCategoryAndQuery(category_id, '');
    this.setState({
      loading: false,
      productDetails: requestProductDetail.results.find((product) => product.id === id),
    });
  }
  
  render() {
    const { productDetails, loading } = this.state;
    const { title, thumbnail, price, available_quantity } = productDetails;

    if(loading) {
      return <p>Loading...</p>
    }
 
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={shoppingCart} alt="Shopping Cart Icon" />
        </Link>
        <div>
          <img alt="Product" src={thumbnail} />
          <div className="movie-card-body">
            <p data-testid="product-detail-name">{`Nome do Produto: ${title}`}</p>
            <p>{`Preço: R$ ${price}`}</p>
            <p>{`Quatidade Disponível: ${available_quantity}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;