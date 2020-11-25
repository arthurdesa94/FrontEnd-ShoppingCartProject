import * as React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../img/shopping-cart.png';

class SearchBar extends React.Component {
  render() {
    const { searchText, onClickAPI } = this.props;
    return (
      <div>
        <form className="search-form">
          <input type="text" value={searchText} />
          <button onClick={onClickAPI} >Buscar</button>
        </form>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={shoppingCart} alt="Shopping Cart Icon" />
        </Link>
      </div>
    );
  }
}

export default SearchBar;
