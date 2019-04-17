import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getMovieList } from '../../core/redux/actions/MovieInfoAction';

import './MovieRankingType.scss';

class MovieRankingType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [
        {
          name: '일간 박스오피스',
          data: 'day',
        },
        {
          name: '주간 박스오피스',
          data: 'week',
        },
        {
          name: '주말 박스오피스',
          data: 'weekend',
        },
      ],
      selectType: 0,
    }
  }

  componentDidMount() {
    this.props.getMovieList(0);
  }

  updateList (index) {
    this.setState({selectType: index});
    this.props.getMovieList(index)
  }

  renderTypeList() {
    const { type, selectType } = this.state;
    return type.map((items, index) => {
      return (
        <div
          onClick={() => selectType !== index ? this.updateList(index) : null}
          className={classNames(
            'MovieRankingType__item', {
              'MovieRankingType__item--select': selectType === index
            }
          )}
          key={items.data}
        >
          {items.name}
        </div>
      )
    })
  }

  render() { 
    return (
      <div className="MovieRankingType">
        {this.renderTypeList()}
      </div>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    getMovieList: (dateType) => dispatch(getMovieList(dateType))
  }
}

export default connect(null, mapDispatchToProps)(MovieRankingType);