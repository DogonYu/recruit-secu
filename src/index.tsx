import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'src/globalStyles';
import App from './App';

import 'antd/dist/antd.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
