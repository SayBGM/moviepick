import React from 'react';
import './MainTitle.scss';

const MainTitle = ({ children }) => {
  return (
    <div className="MainTitle">
      <div className="MainTitle__wrapper">
        {children}
      </div>
    </div>
  )
}

export default MainTitle;