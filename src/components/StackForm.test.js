import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';

describe('StackForm', () => {
  const stackForm = shallow(<StackForm />);

  it('renders the form title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
  });

  it('renders a link home', () => {
    expect(stackForm.find('h4').at(0).text()).toEqual('Home');
  });

  it('renders a Form component', () => {
    expect(stackForm.find('Form').exists()).toBeTruthy();
  });

  it('renders a Button to add a new card', () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders a Button to submit the form', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add Stack');
  });

  describe('and updating the title', () => {
    const event = { target: { value: 'change title' } };
    beforeEach(() => {
      stackForm.find('FormControl')
        .simulate('change', event);
    });

    it('updates title in state', () => {
      expect(stackForm.state().title).toEqual(event.target.value);
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('Button').at(0).simulate('click');
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it('adds a new card to the state', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('renders the propmt section', () => {
      expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt');
    });

    it('renders the answer section', () => {
      expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer');
    });

    describe('and updating the card prompt', () => {
      const event = { target: { value: 'change prompt' } };
      beforeEach(() => {
        stackForm.find('FormControl').at(1)
          .simulate('change', event);
      });

      it('updates the prompt in state', () => {
        expect(stackForm.state().cards[0].prompt).toEqual(event.target.value);
      });
    });

    describe('and updating the card answer', () => {
      const event = { target: { value: 'change answer' } };
      beforeEach(() => {
        stackForm.find('FormControl').at(2)
          .simulate('change', event);
      });

      it('updates the answer in state', () => {
        expect(stackForm.state().cards[0].answer).toEqual(event.target.value);
      });
    });

    describe('when adding a new stack', () => {
      beforeEach(() => {
        stackForm.setState({
          title: 'change title',
          cards: [ { id: 0, prompt: '', answer: 'change answer' } ]
        });
        stackForm.setProps({
          AddStack: jest.fn()
        });
        stackForm.find('Button').at(1).simulate('click');
      });

      it('resets the state', () => {
        expect(stackForm.state().cards).toEqual([]);
      });
    });
  });
});
