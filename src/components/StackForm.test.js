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

  it('renders the `FormInput`', () => {
    expect(stackForm.find('FormInput').exists()).toBe(true);
  });

  describe('and updating the title', () => {
    const event = { target: { value: 'change title' } };
    beforeEach(() => {
      stackForm.find('FormInput').props().handleOnChange(event);
    });

    it('updates title in state', () => {
      expect(stackForm.state().title).toBe(event.target.value);
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('FormInput').props().handleAddCard();
    });

    afterEach(() => {
      stackForm.setState({ title: '', cards: [] });
    });

    it('adds a new card to the state', () => {
      expect(stackForm.state().cards.length).toBe(1);
    });

    describe('and updating the card', () => {
      const event = { target: { value: 'change prompt' } };
      const index = 0;
      beforeEach(() => {
        stackForm.find('FormInput').props().updateCardPart(event, index, 'prompt');
      });
  
      it('updates the prompt in state', () => {
        expect(stackForm.state().cards[0].prompt).toEqual(event.target.value);
      });

      describe('when adding a new stack', () => {
        beforeEach(() => {
          stackForm.setProps({ AddStack: jest.fn() });
          stackForm.find('FormInput').props().handleAddStack();
        });
    
        it('resets the state', () => {
          expect(stackForm.state().cards.length).toBe(0);
        });
      });
    });
  });
});
