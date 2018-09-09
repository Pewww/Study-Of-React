import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;

    return (
      <div className="App">
        {/* <div className={ [styles.box, styles['box-color']].join(' ') }></div> */}
        {/* <div className={ classNames(styles.box, styles['box-color']) }></div> */}
        {/* <div className={ cx('box', 'box-color') }></div> */}

        {/* isBlue의 값이 true일 때만 box-color 클래스 적용 */}
        <div className={ cx('box', {
          'box-color': isBlue
        }) }>
          <div className={ cx('box-inside') }></div>
        </div>
      </div>
    );
  }
}

export default App;
