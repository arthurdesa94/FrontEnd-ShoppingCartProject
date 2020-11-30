import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCart from '../img/shopping-cart.png';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onClickAPI } = this.props;

    return (
      <div className="search-bar">
        <form className="search-form">
          <input
            type="text"
            onChange={ onSearchTextChange }
            data-testid="query-input"
          />
          <button
            type="button"
            onClick={ onClickAPI }
            data-testid="query-button"
          >
            Buscar
          </button>
        </form>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } alt="Shopping Cart Icon" />
        </Link>
      </div>
    );
  };
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onClickAPI: PropTypes.func.isRequired,
};

export default SearchBar;
