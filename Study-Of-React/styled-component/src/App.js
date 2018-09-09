import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.css';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;

    return (
      <div className="App">
        {/* <div className={ [styles.box, styles['box-color']].join(' ') }></div> */}
        {/* <div className={ classNames(styles.box, styles['box-color']) }></div> */}
        {/* <div className={ cx('box', 'box-color') }></div> */}
        <div className={ cx('box', {
          'box-color': isBlue
        }) }>
        </div>
      </div>
    );
  }
}

export default App;
