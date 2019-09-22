import React from 'react';

import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

import { Container } from 'semantic-ui-react';

import { TodoProvider } from './context/TodoContext.js';

function App() {
  return (
    <TodoProvider>
      <Container textAlign='center'>
        <Form />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
