import { useEffect, useState } from 'react'

import './App.scss'
import searchIcon from './assets/search.svg'
import MovieCard from './MovieCard';


// omdb api key -- eadb5f3c
const API_URL = 'http://www.omdbapi.com/?apikey=eadb5f3c';

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (searchValue) => {
    const response = await fetch(`${API_URL}&s=${searchValue}`)
    const data = await response.json()
    setMovies(data.Search);
    console.log('data', data.Search)
  }
  useEffect(() => {
    // searchMovies('mob');
  }, [])

  return (
    <div className="app">
      <h1>MovieSearcher</h1>

      <div className="search">
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }} />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies.length > 0 ?
        (

          <div className="container">
            {
              movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))
            }
          </div>

        ) : (
          <div className="empty">
            <h2 className="no-movies">No movies found</h2>
          </div>
        )
      }


    </div>
  )
}

export default App
