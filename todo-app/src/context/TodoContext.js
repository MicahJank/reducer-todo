import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from '../reducers/reducer.js';

export const TodoContext = createContext();


export const TodoProvider = props => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    );
}