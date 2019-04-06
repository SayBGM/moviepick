import React from 'react';
import MainTitle from '../../components/Main/MainTitle';
import MoviePosterList from '../../components/Main/MoviePosterList';

const Main = () => (
  <React.Fragment>
    <MainTitle>
      <MoviePosterList />
    </MainTitle>
  </React.Fragment>
)

export default Main;