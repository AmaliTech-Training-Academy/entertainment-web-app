import BookmarkSVG from '../../Components/BookmarkButton'
import Regular from '../../data.json'
import { useEffect, useState } from 'react'
import './Recommended.css'
import MovieBox from '../../Components/MovieBox'

const API_URL = "https://entertainment-web-app-api.onrender.com/items";


const Options = () => {
    const [flicks, setFlicks] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) =>{ 
        setFlicks(data)
    })
    }, [])

    return(
        <div className="recommended">
        <h1>Recommended for you</h1>
        <div className="recommended-items">
            {flicks.filter((flick) => {
        return !flick.isTrending})
        .map((flick) => 
            <MovieBox key={flick.title} {...flick}/>)}    
        </div>
        </div>

    )
}

export default Options;