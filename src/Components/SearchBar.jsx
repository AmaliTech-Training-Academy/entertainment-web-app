import './SearchBar.css'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import MovieBox from './MovieBox';
import SearchResults from './OnSearch';



const API_URL = "https://entertainment-web-app-api.onrender.com/items";
const Input = (props) => {
    const [flick, setFlick] = useState([]);
    const [query, setQuery] = useState('');

    const searchFlick = async(e)=>{
        e.preventDefault();
        console.log("Searching")
        try {
            const url = `https://entertainment-web-app-api.onrender.com/items?q=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            data.map((flick)=> <MovieBox key={flick.title} {...flick}/>);
        } catch (e) {
        }
    }

    const changeHandler=(e)=>{
        const text = e.target.value;
        setQuery(text);
    }

    const onEnterPress = (e) => {
        <SearchResults/>
    }


    return (
        <form onSubmit={searchFlick}>
            <input 
            type="search" 
            placeholder={props.placeholder}
            name = "query"
            value={query}
            onChange = {changeHandler}
            onKeyDown={onEnterPress}
            />
            <Link to="/results">
            <div className='search'></div>
            </Link>
        </form>
    )
}

export default Input;