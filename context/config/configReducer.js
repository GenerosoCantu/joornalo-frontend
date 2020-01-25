import { SET_AGENT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_AGENT:
      return {
        ...state,
        agent: action.payload.agent
      };
    default:
      return state;
  }
};
