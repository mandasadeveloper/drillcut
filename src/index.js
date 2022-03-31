import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./style.css"
ReactDOM.render(
  <StrictMode>
  <ColorModeScript />
  <BrowserRouter basename='/drillcut'>
  <App />
  </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

