import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addStack } from '../actions';
import FormInput from './FormInput';

export class StackForm extends Component {
  state = {
    title: '',
    cards: []
  }

  handleOnChange = event => {
    this.setState({title: event.target.value});
  }

  handleAddCard = () => {
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: '', answer: '' });
    this.setState({ cards });
  }

  updateCardPart = (event, index, part) => {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  handleAddStack = () => {
    const { AddStack } = this.props;
    AddStack(this.state);
    this.setState({ title: '', cards: [] });
  }

  render() {
    return (
      <div>
        <Link to='/' className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <FormInput 
          state={this.state}
          handleOnChange={this.handleOnChange}
          handleAddCard={this.handleAddCard}
          updateCardPart={this.updateCardPart}
          handleAddStack={this.handleAddStack}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  AddStack: (stack) => dispatch(addStack(stack))
});

export default connect(null, mapDispatchToProps)(StackForm);
