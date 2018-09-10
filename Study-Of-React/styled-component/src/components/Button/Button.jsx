import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({ children, ...rest }) => {
  return (
    // rest 내에는 모든 props가 전달된다.
    // 예를 들어 onClick과 style이 들어 있다면, onClick={onClick} style={style}과 같은 형식으로 렌더링 된다.
    <div className={ cx('button') }{ ...rest }>
      { children }
    </div>
  );
};

export default Button;