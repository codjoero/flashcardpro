import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { addStack } from '../actions';

export class StackForm extends Component {
  state = {
    title: '',
    cards: []
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
    const { title, cards } = this.state;
    return (
      <div>
        <Link to='/' className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form className="form">
          <Form.Group as={Row} controlId="formTitle">
            <Form.Label column sm="2">
              Title:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={title}
                onChange={event => this.setState({title: event.target.value})}
              />
            </Col>
          </Form.Group>
          {cards.map((card, index) => (
            <div key={card.id}>
              <hr />
              <Form.Row>
                <Form.Group as={Col} controlId="formPrompt">
                  <Form.Label className="form-label">Prompt</Form.Label>
                  <Form.Control
                    onChange={event => this.updateCardPart(event, index, 'prompt')}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formAnswer">
                  <Form.Label className="form-label">Answer</Form.Label>
                  <Form.Control
                    onChange={event => this.updateCardPart(event, index, 'answer')}
                  />
                </Form.Group>
              </Form.Row>
            </div>
          ))}
        </Form>
        <br />
        <Button onClick={() => this.handleAddCard()}>Add Card</Button>
        {' '}
        <Button onClick={() => this.handleAddStack()}>Save and Add Stack</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  AddStack: (stack) => dispatch(addStack(stack))
});

export default connect(null, mapDispatchToProps)(StackForm);
