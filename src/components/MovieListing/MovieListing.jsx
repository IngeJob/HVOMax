import React from 'react';

import { useSelector } from 'react-redux/es/exports';
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import { settingsSlice } from '../../common/settingsSlice';
import './movieListing.scss';


const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let renderMovies, renderSeries = "";

  renderMovies = 
    movies.Response === "True" ? (
      movies.Search.map((movie, index)=>(
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className='movies-error'>
        <h3>
          {movies.Error}
        </h3>
      </div>
    );

  renderSeries = 
    series.Response === "True" ? (
      series.Search.map((serie, index)=>(
        <MovieCard key={index} data={serie} />
      ))
    ) : (
      <div className='series-error'>
        <h3>
          {series.Error}
        </h3>
      </div>
    );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...settingsSlice}>{renderMovies}</Slider>
        </div>
      </div>

      <div className='series-list'>
        <h2>Series</h2>
        <div className='movie-container'>
          <Slider {...settingsSlice}>{renderSeries}</Slider>          
        </div>
      </div>
    </div>
  )
}

export default MovieListing