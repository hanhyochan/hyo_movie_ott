import { useState, useEffect } from 'react'
import './App.scss'
import movieListData from './assets/data/movieListData.json'
import MovieCard from './component/MovieCard'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'

function App() {
  const [movieList, setMovieList] = useState([])

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    setMovieList(movieListData.results.map((el) => ({
      id: el.id,
      img: BASE_IMAGE_URL + el.poster_path,
      title: el.title,
      voteAverage: el.vote_average
    })))
  }, [])

  return (
      <Routes>
        <Route path='/' element={<div className='container'>
          {movieList.map((el) => <MovieCard key={el.id} movieList={el} />)}
        </div>} />
        <Route path='/details' element={<MovieDetail />} />
      </Routes >
  )
}

export default App
