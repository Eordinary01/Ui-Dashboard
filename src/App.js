// src/App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './components/dashboard';

function App() {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
