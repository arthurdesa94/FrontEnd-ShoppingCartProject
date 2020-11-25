import * as React from 'react';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  constructor() {
    super() 
    
  }

  onClickAPI() {
    
  }

  render() {
    return (
      <div>
        <SearchBar />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
