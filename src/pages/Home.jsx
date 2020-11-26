import * as React from 'react';
import * as api from '../services/api';
import { CategoriesList, ProductList, SearchBar } from '../components'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      productList: [],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.fetchProductsQuery = this.fetchProductsQuery.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;

    this.setState({ searchText: value });
  }

  async fetchProductsQuery(event) {
    event.preventDefault();
    const { searchText } = this.state;
    const productFecth = await api.getProductsFromCategoryAndQuery('', searchText);
    if (productFecth.results.length === 0) {
      this.setState({
        productList: [],
        message: true,
      })
    } else {
      this.setState({
        productList: productFecth.results,
        message: false,
      });
    }
  }

  render() {
    const { message, productList } = this.state;

    return (
      <div className="container">
        <h1>Mercadin Online</h1>
        <SearchBar 
          onSearchTextChange={this.onSearchTextChange}
          onClickAPI={this.fetchProductsQuery}
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList />
        {message ? <p>Nenhum produto foi encontrado</p> : <ProductList products={productList}/>}
      </div>
    );
  }
}

export default Home;
