import React from 'react';
import './App.css';
import Book from './Pages/Bookmarked/Bookmarked';
import Home from './Pages/Homepage/Home';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import {Route, Routes} from "react-router-dom"; 
// import { useEffect } from 'react';

// const API_URL = 'https://entertainment-web-app-api.onrender.com/items'

const App = () => {
 
  // const searchItems = async (title: string) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();

  //   console.log(data);
  // }

  // useEffect(()=> {
  //   searchItems('Beyond Earth');
  // }, []);
   
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
