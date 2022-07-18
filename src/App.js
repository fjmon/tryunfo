import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      nCard: [],
    };
  }

  verifAttr = () => {
    const { attr1, attr2, attr3 } = this.state;
    const max = 90;
    return [attr1, attr2, attr3].every((attr) => attr >= 0 && attr <= max);
  }

  handleNewCard = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  somaAttr = () => {
    const { attr1, attr2, attr3 } = this.state;
    const max = 210;
    if (this.verifAttr()) {
      const soma = [attr1, attr2, attr3]
        .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
      return (soma <= max);
    }
  }

  isSaveButtonDisabled = () => {
    const { name, description, attr1, attr2, attr3, image } = this.state;
    const inputVazio = !name || !description || !image;
    const attrVazio = !attr1 || !attr2 || !attr3;
    return !!((inputVazio || attrVazio || !(this.somaAttr())));
  }

  adicCard = () => {
    const novoCard = this.state;
    this.setState((prev) => ({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: '',
      trunfo: false,
      nCard: [...prev.nCard, novoCard],
      nameFilter: '',
      rareFilter: '',
    }
    ));
  }

  hasTrunfo = () => {
    const { nCard } = this.state;
    return nCard.some(({ trunfo }) => trunfo === true);
  }

  onSaveButtonClick = (elem) => {
    elem.preventDefault();
    this.adicCard();
  }

  filtra = ({ target }, name) => {
    const value = (target.value === 'todas') ? '' : target.value;
    this.setState({ [name]: value });
  }

  delet = (name) => {
    const { nCard } = this.state;
    this.setState({
      nCard: nCard.filter((card) => card.name !== name),
    });
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      nCard,
      nameFilter,
      rareFilter,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ this.hasTrunfo() }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onInputChange={ this.handleNewCard }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <label htmlFor="name-filter">
          Buscar carta
          {' '}
          <input
            data-testid="name-filter"
            placeholder="Nome da carta"
            onChange={ (elem) => this.filtra(elem, 'nameFilter') }
            type="text"
            id="name-filter"
          />
        </label>
        <select
          data-testid="rare-filter"
          onChange={ (elem) => this.filtra(elem, 'rareFilter') }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <ul>
          { nCard.filter((card) => ((rareFilter === 'raro')
            ? card.rare === rareFilter : card.rare.includes(rareFilter)))
            .filter((card) => card.name.includes(nameFilter)).map((card) => (
              <div key={ card.name }>
                <Card
                  cardName={ card.name }
                  cardDescription={ card.description }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.image }
                  cardRare={ card.rare }
                  cardTrunfo={ card.trunfo }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.delet(card.name) }
                >
                  Excluir
                </button>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}
// toto
export default App;
