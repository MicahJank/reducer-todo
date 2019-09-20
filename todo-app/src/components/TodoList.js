import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext.js';

import Todo from './Todo.js';


const TodoList = () => {

    const { todos } = useContext(TodoContext);
        return (
        <div>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    );
}

export default TodoList;