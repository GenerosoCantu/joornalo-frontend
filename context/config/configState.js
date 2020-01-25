import React, { useReducer } from 'react';
import ConfigContext from './configContext';
import ConfigReducer from './configReducer';
import { SET_AGENT } from '../types';

const ConfigState = props => {

  const initialState = {
    agent: null
  };

  const [state, dispatch] = useReducer(ConfigReducer, initialState);

  const setAgent = (agent) => {

    dispatch({
      type: SET_AGENT,
      payload: { agent: agent }
    });

  };

  return (
    <ConfigContext.Provider
      value={{
        agent: state.agent,
        setAgent
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigState;
