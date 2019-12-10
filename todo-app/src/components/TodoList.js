import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext.js';
import { NavigationContext } from '../context/NavigationContext.js';
import { List } from 'semantic-ui-react';

import Todo from './Todo.js';


const TodoList = () => {

    const { state } = useContext(TodoContext);
    const [activeItem] = useContext(NavigationContext);

    const [todos, setTodos] = useState(state.todos);

    useEffect(() => {
        if(activeItem === 'ALL') {
            setTodos(state.todos);
        } else if(activeItem === 'ACTIVE') {
            setTodos(state.activeTodos);
        } else if(activeItem === 'COMPLETED') {
            setTodos(state.completedTodos);
        }
    }, [state])

        return (
        <List divided relaxed>
            {todos.map(todo => {
                return (
                <List.Item>
                    <List.Content>
                        <Todo key={todo.id} todo={todo} />
                    </List.Content>
                </List.Item>
                )
            })}
        </List>
    );
}

export default TodoList;