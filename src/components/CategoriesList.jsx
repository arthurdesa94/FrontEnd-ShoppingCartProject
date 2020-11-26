import React from 'react';
import * as api from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super()

    this.state = {
      categories: [],
    }

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

  render() {
    const { categories } = this.state;

    return (
      <div className="categories-list">
        <p>Categorias</p>
        <ul>
          {categories
            .map((category) =>
              <li key={category.id} className="category-item" data-testid="category">
                {category.name}
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
