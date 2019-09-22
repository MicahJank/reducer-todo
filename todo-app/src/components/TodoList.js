import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext.js';
import { List } from 'semantic-ui-react';

import Todo from './Todo.js';


const TodoList = () => {

    const { todos } = useContext(TodoContext);
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