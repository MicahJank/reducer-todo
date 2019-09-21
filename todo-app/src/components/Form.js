import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext.js';


const Form = () => {

    const [todoText, setTodoText] = useState('');
    const { dispatch } = useContext(TodoContext);

    const handleChanges = e => {
        setTodoText(e.target.value);
    }

    return (
        <div>
            <input
                type='text'
                name={todoText}
                value={todoText}
                onChange={handleChanges}
             />
             <button onClick={() => {
                 dispatch({ type: 'ADD', payload: todoText})
             }}>Add</button>
             <button onClick={() => {
                 dispatch({type: 'CLEAR_COMPLETED'})
             }}>Clear Completed</button>
        </div>
    );
}

export default Form;