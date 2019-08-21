import rootReducer from './index';
import * as actions from '../actions';
import { testStack, initialStacks } from '../data/fixtures';

describe('root reducer', () => {
  it('returns the initial state', () => {
    expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] });
  });

  it('sets the main stack', () => {
    expect(rootReducer({}, { type: actions.SET_STACK, stack: testStack }))
      .toEqual({ stack: testStack, stacks: [] });
  });

  it('loads stacks', () => {
    expect(rootReducer({}, { type: actions.LOAD_STACKS, stacks: initialStacks}))
      .toEqual({ stack: {}, stacks: initialStacks });
  });

  it('adds a stack', () => {
    expect(rootReducer({}, { type: actions.ADD_STACK, stack: testStack }))
      .toEqual({ stack: {}, stacks: [testStack]});
  });
});