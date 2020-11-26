import * as React from 'react';

class Home extends React.Component {
  render() {

    return (
      <div>
        <form>
          <input type="text" />
          <button>Buscar</button>
        </form>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;