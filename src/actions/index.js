export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';
export const ADD_STACK = 'ADD_STACK';

export const setStack = (stack) => {
  return {
    type: SET_STACK,
    stack
  };
};

export const loadStacks = (stacks) => {
  return {
    type: LOAD_STACKS,
    stacks
  };
};

export const addStack = (stack) => {
  return {
    type: ADD_STACK,
    stack
  };
};
