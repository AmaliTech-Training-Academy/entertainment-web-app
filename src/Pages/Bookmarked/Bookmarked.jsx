import { useState, useEffect } from 'react';
import Navbar from '../../Components/Nav';
import './Bookmarked.css';
import Input from '../../Components/SearchBar';

const API_URL = "https://entertainment-web-app-api.onrender.com/items";


const Book = () => {


    return(
    <main className='bkmk'>
        <Navbar/>
        <div className='bookmarks'>
        <Input/>
        <h1>Bookmarked</h1>
        </div>
        
    </main>
        )
}

export default Book;