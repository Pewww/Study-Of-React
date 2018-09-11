import React from 'react';
import { render as Render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 기존의 코드는 ReactDOM을 import한 후 ReactDOM.render로 했었음
// import 구문에서 destructuring을 이용하여 Render로 변환
Render(<App />, document.getElementById('root'));
registerServiceWorker();
