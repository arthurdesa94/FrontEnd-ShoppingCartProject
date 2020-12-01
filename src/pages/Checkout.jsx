import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      ableToBuy = false,
    };
  }

  renderElements() {  
    return (
      <div>
        <label htmlFor="name">Nome completo</label>
        <input id="name" type="text" placeholder="Digite seu nome completo" data-testid="checkout-fullname" />
        <label htmlFor="name">E-mail</label>
        <input type="text" placeholder="Digite seu e-mail" data-testid="checkout-email" />
        <label htmlFor="name">CPF</label>
        <input type="text" placeholder="Digite seu CPF" data-testid="checkout-cpf" />
        <label htmlFor="name">Telefone</label>
        <input type="text" placeholder="Digite seu telefone" data-testid="checkout-phone" />
        <label htmlFor="name">CEP</label>
        <input type="text" placeholder="Digite seu CEP" data-testid="checkout-cep" />
        <label htmlFor="name">Endereço</label>
        <input type="text" placeholder="Digite seu endereço" data-testid="checkout-address" />
        <button type="submit">Finalizar a compra</button>
      </div>
    )
  }
  render() {
    return (
      <div>
        <form>
          {this.renderElements()}
        </form>
      </div>
    )
  }
}

export default Checkout;
