import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { PageProvider } from './context/PageContext.jsx'

const App = () => {
  return (
    <div>
      <PageProvider>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </PageProvider>
    </div>
  );
};

export default App;