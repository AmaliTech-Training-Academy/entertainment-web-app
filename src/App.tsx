import React from 'react';
import './App.css';
import Book from './Pages/Bookmarked/Bookmarked';
import Home from './Pages/Homepage/Home';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import {Route, Routes} from "react-router-dom"; 

function App() {
  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/movies'element={<Movies/>}/>
      <Route path='/tv-series'element={<Series/>}/>
      <Route path='/bookmarked'element={<Book/>}/>
    </Routes>
    </>
  );
  }

export default App;
