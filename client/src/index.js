import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import './index.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


const rootElement = document.getElementById('root');
ReactDOM.render(
<Router>
    <App />
</Router>, rootElement);
