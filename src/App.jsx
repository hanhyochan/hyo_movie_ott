import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MovieDetail from './pages/MovieDetail.jsx';
import { PageProvider } from './context/PageContext.jsx'

const App = () => {
  return (
    <div>
      <PageProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details:movieId' element={<MovieDetail />} />
        </Routes>
      </PageProvider>
    </div>
  );
};

export default App;