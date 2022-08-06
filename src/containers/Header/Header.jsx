import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';

import logo from '../../assets/logo.png';
import { FaSearch, FaUserCircle } from "react-icons/fa";
import './header.scss';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if(term === '') return alert ('Please enter search term!')
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm('');
  }

  return (
    <div className='app__header'>
      <div className='app__header-logo'>
        <Link to='/'><img src={logo} /></Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={handleSearch}>
          <input 
            type='text' 
            value={term}
            placeholder='Search Movies or Series'
            onChange={(e)=>setTerm(e.target.value)}
          /> 
          <button type='submit'><FaSearch/></button>
        </form>
      </div>
      <div className='app__header-user'>
        <FaUserCircle />
      </div>
    </div>
  )
}

export default Header