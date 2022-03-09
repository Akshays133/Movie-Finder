import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav'
import SearchBox from './SearchBox'
import MovieList from './MovieList'
import Pagination from './Pagination'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = async (e) => { 
    setLoading(true)
    e.preventDefault();
    await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=${currentPage}`)
    .then(res => {
      setMovies(res.data.results);
      setResults(res.data.total_results);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false)
    })
  }

  const nextPage = async (pageNumber) => {
    await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=${pageNumber}`)
    .then(res => {
      setMovies(res.data.results);
      setResults(res.data.total_results);
      setCurrentPage(pageNumber);
    }).catch((err) => {
      console.log(err);
    })
  }
  let numberPages = Math.floor(totalResults / 20);
  
  return (
    <div>
      <Nav />
        <SearchBox handleSubmit={handleSubmit} handleChange={handleChange} loading={loading}/>
        <MovieList movies={movies}/>
        {totalResults > 20 ? 
          <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/> 
          : ''
        }
    </div>
  );
}

export default App;
