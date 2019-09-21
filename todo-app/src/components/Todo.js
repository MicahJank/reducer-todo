import React, { useContext } from 'react';

import { TodoContext } from '../context/TodoContext.js';

const Todo = ( { todo } ) => {

    const { dispatch } = useContext(TodoContext);

    const handlerFunction = () => {
        dispatch({
            type: 'TOGGLE_COMPLETE',
            id: todo.id
        })
    }

    return (
        <h3 className={todo.complete ? 'todo-completed' : ''} onClick={handlerFunction}>{todo.item}</h3>
 );
}

export default Todo;