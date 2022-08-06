import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrSerieDetail, getSelectedMovieOrSerie, removeSelectedMovieOrSerie } from '../../features/movies/movieSlice';

import { FaStar, FaThumbsUp, FaFilm, FaRegCalendarAlt } from "react-icons/fa";
import './movieDetail.scss';

const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrSerie)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSerieDetail(imdbID))
    return () =>{ //para limpiar la busqueda
      dispatch(removeSelectedMovieOrSerie())
    }
  },[dispatch, imdbID])

  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 
      ? (<div><h1 style={{color: "#fff"}}>...Loading</h1></div>)
      : (     
        <>
          <article className='movie-article'>
            <span className='movie-title'>
              {data.Title}
            </span>
            <div className='movie-rating'>
              <span>
                IMDB Rating <FaStar/> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <FaThumbsUp/> : {data.imdbVotes}
              </span>
              <span>
                Runtime <FaFilm/> : {data.Runtime}
              </span>
              <span>
                Year <FaRegCalendarAlt/> : {data.Year}
              </span>
            </div>

            <div className='movie-plot'>{data.Plot}</div>

            <div className='movie-info'>
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </article>

          <div className='movie-image'>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}  
    </div>
  )
}

export default MovieDetail