import React from 'react';
import './MainContents.scss';

const MainContents = ({ children }) => {
  return (
    <div className="MainContents">
      <div className="MainContents__wrapper">
        {children}
      </div>
    </div>
  )
}

export default MainContents;