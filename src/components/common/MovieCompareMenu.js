import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classname from 'classnames';

import './MovieCompareMenu.scss';
import { Compare } from '../../assets';

class MovieCompareMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  ClickFloatBtn() {
    this.state.isOpen ? this.props.history.push('/compare') : this.setState({isOpen: true})
  }

  render() { 
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <div
          className={
            classname(
              'MovieCompareBtn',
              {'MovieCompareBtn--isOpen': isOpen}
            )
          }
          onClick={() => this.ClickFloatBtn()}>
          <Compare />
        </div>
        <div
          className={
            classname('MovieCompareMenu', {
            'MovieCompareMenu--wrapper': isOpen
            })
          }
          onClick={() => this.setState({isOpen: false})}
        >
          <div className="MovieCompareMenu__contents" onClick={(e) => e.stopPropagation()}>
            <div className="MovieCompareMenu__contents__closeBtn" onClick={() => this.setState({isOpen: false})}>ｘ</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default withRouter(MovieCompareMenu);