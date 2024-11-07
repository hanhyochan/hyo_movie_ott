import { useState, useEffect } from 'react'
import './App.scss'
import.meta.env.VITE_API_KEY
import MovieCard from './component/MovieCard'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'
import NavBar from './component/NavBar '
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  const [movieList, setMovieList] = useState([])

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9a3d28aa764f7a0dd23e10e216af9d90');
          const movieListData = await response.json();
          setMovieList(movieListData.results.map((el) => ({
            id: el.id,
            img: BASE_IMAGE_URL + el.poster_path,
            title: el.title,
            voteAverage: el.vote_average
          })))
        } catch (error) {
          console.error('데이터 에러', error);
        }
      };
      fetchData();
    }, []);

  return (
    <>
    <NavBar />
    ff
      <Routes>
        <Route path='/' element={<div className='container'>
          {movieList.map((el) => <MovieCard key={el.id} movieList={el} />)}
        </div>} />
        <Route path='/details/:movieId' element={<MovieDetail />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes >
      </>
  )
}

export default App
