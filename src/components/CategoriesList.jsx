import React from 'react';

class CategoriesList extends React.Component {
  render() {
    const { category } = this.props;
    const { name } = category;

    return (
      <li data-testid="category">{name}</li>
    );
  }
}

export default CategoriesList;
