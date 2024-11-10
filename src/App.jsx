import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import MovieDetail from './pages/MovieDetail'
import SearchMovie from './pages/SearchMovie'
import NavBar from './component/NavBar '
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {

  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details/:movieId' element={<MovieDetail />} />
          <Route path='/searchMovie' element={<SearchMovie />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes >
    </div>
  )
}

export default App
