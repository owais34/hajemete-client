import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import Wrapper from './Wrapper';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <Wrapper />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



