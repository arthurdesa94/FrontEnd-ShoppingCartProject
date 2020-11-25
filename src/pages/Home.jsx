import * as React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import shoppingCart from '../img/shopping-cart.png';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      categories: [],
    }

    this.renderCategoriesList = this.renderCategoriesList.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
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

  renderCategoriesList() {
    const { categories } = this.state;

    return (
      <div>
        <p className="categories-list">Categorias</p>
        <ul className="categories-list">
          {categories.map((category) => <CategoriesList key={category.id} category={category} />)}
        </ul>
      </div>
    );
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <form className="search-form">
          <input type="text" />
          <button>Buscar</button>
        </form>

        <div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={shoppingCart} alt="Shopping Cart Icon" />
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        {(categories.length !== 0) ? this.renderCategoriesList(): <p>Loading...</p>}
      </div>
    );
  }
}

export default Home;
