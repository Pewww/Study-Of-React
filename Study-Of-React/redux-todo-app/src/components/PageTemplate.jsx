import React from 'react';
import styles from './PageTemplate.css';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => {
  return (
    <div className={ cx('page-template') }>
      <h1>Todo App</h1>
      <div className={ cx('content') }>
        { children }
      </div>
    </div>
  );
}

export default PageTemplate;