import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './StackList';
import { initialStacks } from '../data/fixtures';

const props = {
  setStack: jest.fn(),
  loadStacks: jest.fn(),
  initialStacks
};

describe('StackList', () => {
  const stackList = shallow(<StackList {...props} />);

  it('renders stack Links', () => {
    expect(stackList.find('Link h4').text()).toEqual(props.initialStacks[0].title);
  });

  it('calls setStack function on click', () => {
    stackList.find('Link').simulate('click');
    expect(props.setStack).toBeCalled();
  });
});

describe('initial data', () => {
  const newProps = {
    setStack: jest.fn(),
    loadStacks: jest.fn(),
    initialStacks: []
  };
  const stackList = shallow(<StackList {...newProps} />);

  it('loads initial data if none detected', () => {
    expect(newProps.loadStacks).toBeCalled();
  });
});
