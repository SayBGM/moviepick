import React from 'react';
import MainContents from '../../components/Main/MainContents';
import MoviePosterList from '../../components/Main/MoviePosterList';

const Main = () => (
  <React.Fragment>
    <MainContents>
      <MoviePosterList />
    </MainContents>
  </React.Fragment>
)

export default Main;