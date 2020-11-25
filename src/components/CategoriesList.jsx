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
    // // api.getCategories().then((result) => this.setState({categories: result}));
    // // console.log(api.getCategories());
    // const categoriesList = await api.getCategories();
    // this.setState({
    //   categories: categoriesList,
    // });
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
      <div>
        <p className="categories-list">Categorias</p>
        <ul className="categories-list">
          {categories.map((category) => <li key={category.id} data-testid="category">{category.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
