import React from 'react';

class CategoriesList extends React.Component {
  render() {
    const { categories, handleCategories } = this.props;

    return (
      <div className="categories-list">
        <p>Categorias</p>
        <ul>
          {categories
            .map((category) =>
              <li key={category.id} data-id={category.id} onClick={handleCategories} className="category-item" data-testid="category">
                {category.name}
              </li>)
            )
          }
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
