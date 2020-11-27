import * as React from 'react';
import * as api from '../services/api';
import { CategoriesList, ProductList, SearchBar } from '../components';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.fetchProductsQuery = this.fetchProductsQuery.bind(this);
    this.state = {
      searchText: '',
      productList: [],
      categories: [],
      selectedCategory: [],
    };
  }

  handleEvent(event) {
    const id = event.target.getAttribute("data-id");
    this.handleCategories(id);
  } 

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categoriesList = await api.getCategories();
    this.setState({
      categories: categoriesList,
    });
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
      });
    } else {
      this.setState({
        productList: productFecth.results,
        message: false,
      });
    }
  }

  handleCategories(id) {
    this.setState({
    selectedCategory: id,
    }, async () => {
      const { searchText, selectedCategory } = this.state;
      const productFecth = await api.getProductsFromCategoryAndQuery(selectedCategory, searchText);
      this.setState({
        productList: productFecth.results,
      })
    })
  }

  render() {
    const { message, productList, categories } = this.state;
    const noProduct = <p>Nenhum produto foi encontrado</p>;

    return (
      <div className="container">
        <h1>Mercadin Online</h1>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onClickAPI={ this.fetchProductsQuery }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList handleCategories={this.handleEvent} categories={ categories } />
        { message ? noProduct : <ProductList products={productList} /> }
      </div>
    );
  }
}

export default Home;
