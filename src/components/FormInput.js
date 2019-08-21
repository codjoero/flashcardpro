import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FormInput =({
  state : { title, cards },
  handleOnChange,
  handleAddCard,
  updateCardPart,
  handleAddStack,
}) => (
  <>
    <Form className="form">
      <Form.Group as={Row} controlId="formTitle">
        <Form.Label column sm="2">
          Title:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            value={title}
            onChange={event => handleOnChange(event)}
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
                onChange={event => updateCardPart(event, index, 'prompt')}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formAnswer">
              <Form.Label className="form-label">Answer</Form.Label>
              <Form.Control
                onChange={event => updateCardPart(event, index, 'answer')}
              />
            </Form.Group>
          </Form.Row>
        </div>
      ))}
    </Form>
    <br />
    <Button onClick={handleAddCard}>Add Card</Button>
    {' '}
    <Button onClick={handleAddStack}>Save and Add Stack</Button>
  </>
);

export default FormInput;