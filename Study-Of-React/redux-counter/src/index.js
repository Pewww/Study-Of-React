import React from 'react';
import { render as Render } from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// Redux 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
// Provider는 react-redux 라이브러리에 내장되어 있는,
// 리액트 앱에 store를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트이다.
import { Provider } from 'react-redux';

const store = createStore(reducers);

Render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
