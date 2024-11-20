import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MovieDetail from './pages/MovieDetail.jsx';
import NavBar from './component/NavBar.jsx';
import { PageProvider } from './context/PageContext.jsx'

const App = () => {
  return (
    <>
      <PageProvider> 
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details/:movieId' element={<MovieDetail />} />
        </Routes>
      </PageProvider>
    </>
  );
};

export default App;