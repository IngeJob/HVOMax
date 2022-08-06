import React, { useEffect } from 'react';

import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux/es/exports';

import MovieListing from '../../components/MovieListing/MovieListing';

const Home = () => {
  
  const dispatch = useDispatch();
  const movieText = "Jobs";
  const seriesText = "middle";

  useEffect(() => {
    dispatch (fetchAsyncMovies(movieText));
    dispatch (fetchAsyncSeries(seriesText));
  }, [dispatch])

  return (
    <div>
      <div className='app__home-banner'></div>
      <MovieListing />
    </div>
  )
}

export default Home