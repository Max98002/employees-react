import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css';

import App from './componets/app/app';

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.querySelector('#root')
);
