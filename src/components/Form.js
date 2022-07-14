import React from 'react';

class Form extends React.Component {
/*  constructor() {
    super();
    this.state = {
      nomeCarta: '',
      descCarta: '',
      atriCarta1: 0,
      atriCarta2: 0,
      atriCarta3: 0,
      image: '',
      rare: false,
      trunfo: false,

    };
  }

  /*    fnomeCarta = (event) => {
            this.setState({ nomeCarta: event.target.value })
        }
        fdescCarta = (event) => {
            this.setState({ descCarta: event.target.value })
        }
        fatriCarta1 = (event) => {
            this.setState({ atriCarta1: event.target.value })
        }
        fatriCarta2 = (event) => {
            this.setState({ atriCarta2: event.target.value })
        }
        fatriCarta3 = (event) => {
            this.setState({ atriCarta3: event.target.value })
        }
        fimage = (event) => {
            this.setState({ image: event.target.value })
        }
        frare = (event) => {
            this.setState({ rare: event.target.selected })
        }
        ftrunfo = (event) => {
            this.setState({ trunfo: event.target.checked })
        }

    fChange = (event) => {
      const { name, type, checked, value } = event.target;
      this.setState({ [name]: type === 'checkbox' ? checked : value });
    }

    fSubmit = (event) => {
      event.preventDefault();
    }
*/
  render() {
    /* const {
      nomeCarta,
      descCarta,
      atriCarta1,
      atriCarta2,
      atriCarta3,
      image,
      rare,
      trunfo,
    } = this.state;
*/
    return (
      <form>

        <label htmlFor="nomeCarta">
          Nome
          <input
            type="text"
            name="nomeCarta"
            data-testid="name-input"
            //            onChange={ this.fChange }
            //            value={ nomeCarta }
          />
        </label>

        <label htmlFor="descCarta">
          Descrição
          <input
            type="textarea"
            name="descCarta"
            data-testid="description-input"
            //            onChange={ this.fChange }
            //          value={ descCarta }
          />
        </label>

        <label htmlFor="atriCarta1">
          Attr01
          <input
            type="number"
            name="atriCarta1"
            data-testid="attr1-input"
            //        onChange={ this.fChange }
            //      value={ atriCarta1 }
          />
        </label>

        <label htmlFor="atriCarta2">
          Attr02
          <input
            type="number"
            name="atriCarta2"
            data-testid="attr2-input"
            //    onChange={ this.fChange }
          //  value={ atriCarta2 }
          />
        </label>

        <label htmlFor="atriCarta3">
          Attr03
          <input
            type="number"
            name="atriCarta3"
            data-testid="attr3-input"
            // onChange={ this.fChange }
            // value={ atriCarta3 }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="image"
            data-testid="image-input"
            //            onChange={ this.fChange }
            //          value={ image }
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select type="select" name="rare" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
          />
        </label>

        <button
          name="button"
          data-testid="save-button"
          type="submit"
          disabled
        >
          Salvar
        </button>
      </form>

    );
  }
}

export default Form;
