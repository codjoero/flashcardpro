import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';
import { testStack } from '../data/fixtures';

const props = {
  state : { title: '', cards: [] },
  handleOnChange: jest.fn(),
  handleAddCard: jest.fn(),
  updateCardPart: jest.fn(),
  handleAddStack: jest.fn(),
};

describe('FormInput', () => {
  const formInput = shallow(<FormInput {...props} />);

  it('renders a Form component', () => {
    expect(formInput.find('Form').exists()).toBeTruthy();
  });

  it('renders a Button to add a new card', () => {
    expect(formInput.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders a Button to submit the form', () => {
    expect(formInput.find('Button').at(1).props().children).toEqual('Save and Add Stack');
  });

  describe('and updating the title', () => {
    const event = { target: { value: 'change title' } };
    beforeEach(() => {
      formInput.find('FormControl')
        .simulate('change', event);
    });

    it('updates title in state', () => {
      const spy = jest.spyOn(props, 'handleOnChange');
      expect(spy).toBeCalled();
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      formInput.find('Button').at(0).simulate('click');
      formInput.setProps({ state: testStack });
    });

    afterEach(() => {
      formInput.setProps({ state: { title: '', cards: [] } });
    });

    it('adds a new card to the state', () => {
      const spy = jest.spyOn(props, 'handleAddCard');
      expect(spy).toBeCalled();
    });

    it('renders the prompt section', () => {
      expect(formInput.find('FormLabel').at(1).props().children).toEqual('Prompt');
    });

    it('renders the answer section', () => {
      expect(formInput.find('FormLabel').at(2).props().children).toEqual('Answer');
    });

    describe('and updating the card prompt', () => {
      const event = { target: { value: 'change prompt' } };
      const index = 0;
      beforeEach(() => {
        formInput.find('FormControl').at(1)
          .simulate('change', event);
      });

      it('updates the prompt in state', () => {
        const spy = jest.spyOn(props, 'updateCardPart');
        expect(spy).toBeCalledWith(event, index, 'prompt');
      });
    });

    describe('and updating the card answer', () => {
      const event = { target: { value: 'change answer' } };
      const index = 0;
      beforeEach(() => {
        formInput.find('FormControl').at(2)
          .simulate('change', event);
      });

      it('updates the answer in state', () => {
        const spy = jest.spyOn(props, 'updateCardPart');
        expect(spy).toBeCalledWith(event, index, 'answer');
      });
    });

    describe('when adding a new stack', () => {
      beforeEach(() => {
        formInput.find('Button').at(1).simulate('click');
      });

      it('resets the state', () => {
        const spy = jest.spyOn(props, 'handleAddStack');
        expect(spy).toBeCalled();
      });
    });
  });
});
