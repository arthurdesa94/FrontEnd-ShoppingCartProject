import React from 'react';
import * as api from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super()

    this.state = {
      categories: [],
      selectedCategory: [],
    }

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  async fetchFilterCategories() {
    const { selectedCategory } = this.state;
    const filtered = await api.getProductsFromCategoryAndQuery(selectedCategory , '');
    this.setState({
      filter: filtered,
    });
  }

  handleEvent(event) {
    api.getProductsFromCategoryAndQuery(event , '')
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

  render() {
    const { categories } = this.state;

    return (
      <div className="categories-list">
        <p>Categorias</p>
        <ul>
          {categories
            .map((category) =>
              <li key={category.id} onClick={() => this.handleEvent(category.id)} className="category-item" data-testid="category">
                {category.name}
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
