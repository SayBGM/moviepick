import React from 'react';
import './MainContents.scss';

const MainContents = ({ children }) => {
  return (
    <div className="MainContents">
      {children}
    </div>
  )
}

export default MainContents;