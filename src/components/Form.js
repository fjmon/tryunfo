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
      <form>

        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>

        <label htmlFor="cardAttr1">
          Attr01
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>

        <label htmlFor="cardAttr2">
          Attr02
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>

        <label htmlFor="cardAttr3">
          Attr03
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select
            type="select"
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        { hasTrunfo === true ? (
          <p data-testid="trunfo-input">Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            />
          </label>
        )}

        <button
          name="button"
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
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
