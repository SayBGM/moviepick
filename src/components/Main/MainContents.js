import React, { Component } from 'react';

class MainContents extends Component {
  render() {
  const { selectData } = this.props;
  if (selectData === null) {
    return (
      <div className="MainContents">
        
      </div>
    );
  }
  return (
    <div className="MainContents">
      
    </div>
  );
  }
}
 
export default MainContents;