import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from './Stack';
import { testStack } from '../data/fixtures';

const props = { stack: testStack };

describe('Stack', () => {
  const stack = shallow(<Stack {...props} />);

  it('renders the title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title);
  });

  it('renders the link home', () => {
    expect(stack.find('Link h4').text()).toEqual('Home');
  });

  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length);
  });
});
