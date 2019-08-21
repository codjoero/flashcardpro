import * as actions from './index';
import { testStack, initialStacks } from '../data/fixtures';

describe('actions', () => {
  it('creates an action to set the main stack', () => {
    const expectedAction = {
      type: actions.SET_STACK,
      stack: testStack
    };
    expect(actions.setStack(testStack)).toEqual(expectedAction);
  });

  it('creates an action to add a stack', () => {
    const expectedAction = {
      type: actions.ADD_STACK,
      stack: testStack
    };
    expect(actions.addStack(testStack)).toEqual(expectedAction);
  });

  it('creates an action to load stacks', () => {
    const expectedAction = {
      type: actions.LOAD_STACKS,
      stacks: initialStacks
    };
    expect(actions.loadStacks(initialStacks)).toEqual(expectedAction);
  });
});
