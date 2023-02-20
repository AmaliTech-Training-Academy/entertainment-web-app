import React from 'react';
import './App.css';
import Book from './Pages/Bookmarked/Bookmarked';
import Home from './Pages/Homepage/Home';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import {Route, Routes} from "react-router-dom"; 
import Login from './Components/Login/Validation/Login';
import Signup from './Components/Login/Validation/Signup';
import SearchResults from './Components/OnSearch';

function App() {
  return (
    <>
    <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/movies'element={<Movies/>}/>
      <Route path='/tv-series'element={<Series/>}/>
      <Route path='/bookmarked'element={<Book/>}/>
      <Route path='/' element={<Signup/>}/>
      <Route path='/log-in' element={<Login/>}/>
      <Route path='/results' element={<SearchResults/>}/>
    </Routes>
    </>
  );
  }

export default App;
