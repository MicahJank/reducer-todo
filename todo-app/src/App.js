import React from 'react';

import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

import { TodoProvider } from './context/TodoContext.js';

function App() {
  return (
    <TodoProvider>
      <Form />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
