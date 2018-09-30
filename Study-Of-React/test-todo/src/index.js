import React from 'react';
import { render as Render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Render(<App />, document.getElementById('root'));
registerServiceWorker();
