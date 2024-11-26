import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MovieDetail from './pages/MovieDetail.jsx';
import NavBar from './component/NavBar.jsx';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { PageProvider } from './context/PageContext.jsx'
import { SearchViewProvider } from './context/SearchViewContext.jsx';

const App = () => {
  return (
    <>
      <SearchViewProvider>
        <PageProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/details/:movieId' element={<MovieDetail />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </PageProvider>
      </SearchViewProvider>
    </>
  );
};

export default App;