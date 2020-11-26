import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    // const {products} = this.props;

    this.state = {
      productDetails: '',
    };
  }

  componentDidMount() {
    // this.fetchProductDetail();
    const { state } = this.props.location.state;
    // this.setState({productDetails: state});
  }

  // async fetchProductDetail() {
  //   const productId = this.props.match.params.id;
  //   const requestProductDetail = await api.getProductsFromCategoryAndQuery(productId, '');
  //   this.setState({
  //     productDetails: requestProductDetail,
  //   });
  // }
  
  render() {
    const { productDetails } = this.state;
    console.log(this.props);
    // const { title, thumbnail, price, available_quantity, seller } = productDetails;

    return (
      <div>
        {/* <Link to="/">Voltar</Link>
        <img alt="Product" src={thumbnail} />
        <div className="movie-card-body">
          <p>{`Nome do Produto: ${title}`}</p>
          <p>{`Preço: ${price}`}</p>
          <p>{`Vendedor: ${seller}`}</p>
          <p>{`Quatidade Disponível: ${available_quantity}`}</p>
        </div> */}
      </div>
    );
  }
}

export default ProductDetails;