import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Header from 'components/header';
import Routes from 'routes';

import './style.css';

render(
  <React.StrictMode>
    <Router>
      <Header />                
      <main>
        { Routes }
      </main> 
    </Router>     
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
