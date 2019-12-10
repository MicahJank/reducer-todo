import React from 'react';

import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
import HeaderTitle from './components/HeaderTitle.js';
import Navigation from './components/Navigation.js';

import { Container, Header } from 'semantic-ui-react';

import { TodoProvider } from './context/TodoContext.js';
import { NavigationProvider } from './context/NavigationContext.js';

function App() {
  return (
    <TodoProvider>
      <NavigationProvider>
        <HeaderTitle />
        <Navigation />
        <Container textAlign='center'>
          <Form />
          <TodoList />
        </Container>
      </NavigationProvider>
    </TodoProvider>
  );
}

export default App;
