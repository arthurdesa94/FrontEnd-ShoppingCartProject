import * as React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../img/shopping-cart.png';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  render() {
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
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
