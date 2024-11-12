import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import MovieDetail from './pages/MovieDetail'
import SearchMovie from './pages/SearchMovie'
import NavBar from './component/NavBar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details/:movieId' element={<MovieDetail />} />
          <Route path='/searchMovie' element={<SearchMovie />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes >
      </AuthProvider>
    </div>
  )
}

export default App
