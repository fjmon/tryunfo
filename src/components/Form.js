import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
/*  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: false,
      cardTrunfo: false,

    };
  }

  /*    fcardName = (event) => {
            this.setState({ cardName: event.target.value })
        }
        fcardDescription = (event) => {
            this.setState({ cardDescription: event.target.value })
        }
        fcardAttr1 = (event) => {
            this.setState({ cardAttr1: event.target.value })
        }
        fcardAttr2 = (event) => {
            this.setState({ cardAttr2: event.target.value })
        }
        fcardAttr3 = (event) => {
            this.setState({ cardAttr3: event.target.value })
        }
        fcardImage = (event) => {
            this.setState({ cardImage: event.target.value })
        }
        fcardRare = (event) => {
            this.setState({ cardRare: event.target.selected })
        }
        fcardTrunfo = (event) => {
            this.setState({ cardTrunfo: event.target.checked })
        }

    fChange = (event) => {
      const { name, type, checked, value } = event.target;
      this.setState({ [name]: type === 'checkbox' ? checked : value });
    }

    fSubmit = (event) => {
      event.preventDefault();
    }
*/
mensHasTrunfo = () => (
  <p data-testid="trunfo-input">
    Você já tem um Super Trunfo em seu baralho
  </p>
)

semTrunfo = (cardTrunfo, onInputChange) => (
  <label htmlFor="trunfo-input">
    <input
      type="checkbox"
      data-testid="trunfo-input"
      id="trunfo-input"
      name="trunfo"
      checked={ cardTrunfo }
      onChange={ onInputChange }
    />
    Super Trunfo
  </label>
)

render() {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    hasTrunfo,
    isSaveButtonDisabled,
    onInputChange,
    onSaveButtonClick,
  } = this.props;

  return (
    <form onSubmit={ onSaveButtonClick }>
      <label htmlFor="name-input" className="form">
        Nome:
        <input
          data-testid="name-input"
          name="name"
          value={ cardName }
          onChange={ onInputChange }
          placeholder="Nome da carta"
          type="text"
          id="name-input"
        />
      </label>
      <label htmlFor="description-input" className="form">
        Descrição:
        <input
          data-testid="description-input"
          name="description"
          value={ cardDescription }
          onChange={ onInputChange }
          type="textarea"
          id="description-input"
        />
      </label>
      <label htmlFor="attr1-input" className="form">
        Attr01:
        <input
          data-testid="attr1-input"
          name="attr1"
          min="0"
          max="90"
          value={ cardAttr1 }
          onChange={ onInputChange }
          type="number"
          id="attr1-input"
        />
      </label>
      <label htmlFor="attr2-input" className="form">
        Attr02:
        <input
          data-testid="attr2-input"
          name="attr2"
          min="0"
          max="90"
          value={ cardAttr2 }
          onChange={ onInputChange }
          type="number"
          id="attr2-input"
        />
      </label>
      <label htmlFor="attr3-input" className="form">
        Attr03:
        <input
          data-testid="attr3-input"
          name="attr3"
          min="0"
          max="90"
          value={ cardAttr3 }
          onChange={ onInputChange }
          type="number"
          id="attr3-input"
        />
      </label>
      <label htmlFor="image-input" className="form">
        Imagem:
        <input
          data-testid="image-input"
          name="image"
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          id="image-input"
        />
      </label>
      <label htmlFor="rare-input" className="form">
        Raridade:
        <select
          data-testid="rare-input"
          name="rare"
          value={ cardRare }
          onChange={ onInputChange }
          id="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>

      {(hasTrunfo)
        ? this.mensHasTrunfo() : this.semTrunfo(cardTrunfo, onInputChange) }

      <button
        data-testid="save-button"
        name="button"
        type="submit"
        disabled={ isSaveButtonDisabled }
      >
        Salvar
      </button>
    </form>

  );
}
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
