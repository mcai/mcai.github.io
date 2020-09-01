import React from 'react';
import ReactDOM from 'react-dom';
import {IkzaoApp} from './IkzaoApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import {ProtocolConverterApp} from "./ProtocolConverterApp";

ReactDOM.render(
  <React.StrictMode>
    <IkzaoApp />
    <ProtocolConverterApp />
  </React.StrictMode>,
  document.getElementById('root')
);
