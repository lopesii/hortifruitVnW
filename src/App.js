import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './index.css';

import alface from './assets/alface.png';
import beterraba from './assets/beterraba.png';
import cenoura from './assets/cenoura.png';
import cereja from './assets/cereja.png';
import laranja from './assets/laranja.png';
import limao from './assets/limao.png';
import manga from './assets/manga.png';
import tomate from './assets/tomate.png';
import iconeCarrinho from './assets/ShoppingCart.png';
import iconeMenos from './assets/MinusCircle.png';
import iconeMais from './assets/PlusCircle.png';

class App extends Component {
  state = {
    lista: [
      {
        fruta: `${alface}`,
      },
      {
        fruta: `${laranja}`,
      },
      {
        fruta: `${cereja}`,
      },
      {
        fruta: `${cenoura}`,
      },
      {
        fruta: `${manga}`,
      },
      {
        fruta: `${limao}`,
      },
      {
        fruta: `${beterraba}`,
      },
      {
        fruta: `${tomate}`,
      },
    ],
  };
  render() {
    return (
      <>
        <section className="produtos">
          <div>
            <h1>hortifruti</h1>
            <p>VnW</p>
          </div>

          <div className="cardFrutas">
            <h2>Nossos Produtos</h2>
            <ul>
              {this.state.lista.map((item) => (
                <img src={item.fruta} />
              ))}
            </ul>
          </div>

          <div className="containerCarrinho">
            <div className="carrinho">
              <img src={iconeCarrinho} alt="Icone de carrinho de compras" />
              <p>Arraeste o seu produto aqui para colocar no carrinho</p>
            </div>

            <div className="buttonCarrinho">
              <img src={iconeMais} alt="Icone com sinal de mais" />
              <img src={iconeMenos} alt="Icone com sinal de menos" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;