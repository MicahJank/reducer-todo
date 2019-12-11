import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext.js';

import { Button, Form as TodoForm } from 'semantic-ui-react';
import styled from 'styled-components';


const Container = styled.div`
    .ui.form .todo-form {
        border-top: none;
        border-left: none;
        border-right: none;
        width: 50%;
        border-radius: 0;
    }

    .ui.form {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .ui.button.add {
        margin-left: 10px;
    }

    .ui.button.clear-completed {
        margin: 20px;
    }
`;

const Form = () => {

    const [todoText, setTodoText] = useState('');
    const { dispatch } = useContext(TodoContext);

    const handleChanges = e => {
        setTodoText(e.target.value);
    }

    const handleSubmit = () => {
        dispatch({ type: 'ADD', payload: todoText});
        setTodoText('');
    }

    return (
        <Container>
            <TodoForm>
                <input className='todo-form'
                    type='text'
                    name={todoText}
                    value={todoText}
                    onChange={handleChanges}
                    placeholder='Enter a todo...'
                />
                <Button primary className='add' type='submit' onClick={handleSubmit}>Add</Button>
            </TodoForm>
            <Button color='yellow' className='clear-completed' onClick={() => {
                    dispatch({type: 'CLEAR_COMPLETED'})
                }}>Clear Completed</Button>
        </Container>
    );
}

export default Form;