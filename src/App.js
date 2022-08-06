import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './containers/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
        <div className='container'>
          <Routes>          
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />}/>
            <Route path='*' element={<PageNotFound />} />         
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
