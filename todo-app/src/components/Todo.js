import React, { useContext } from 'react';

import { TodoContext } from '../context/TodoContext.js';

import { Checkbox, List } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space;
    align-items: baseline;
    width: 70%;
    margin: auto;
    padding: 0 20px;

    .todo {
        position: relative;
        width: 100%;
        padding: 30px;
        top: 0;
    }

    div {
        position: absolute;
        top: 20px;
        font-size: 1.5rem;
        right: 20px;
    }

    .ui.fitted.checkbox {
        position: absolute;
        left: 20px;
        top: 20px;
    }

`;

const Todo = ( { todo } ) => {

    const { dispatch } = useContext(TodoContext);

    const handlerFunction = () => {
        dispatch({
            type: 'TOGGLE_COMPLETE',
            id: todo.id
        })
    }

    return (
        <Container>
            <div className='todo'>
                <Checkbox onClick={handlerFunction} />
                <div className={todo.complete ? 'todo-completed' : ''}>{todo.item}</div>
            </div>
        </Container>
 );
}

export default Todo;