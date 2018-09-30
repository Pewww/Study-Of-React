import React from 'react';
import './PageTemplate.css';

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <h1>일정 관리</h1>
      <div className="children">
        { children }
      </div>
    </div>
  );
};

export default PageTemplate;