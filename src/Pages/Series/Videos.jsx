import MovieBox from '../../Components/MovieBox'
import { useEffect, useState } from 'react'


const API_URL = "https://entertainment-web-app-api.onrender.com/items";

const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) =>{ 
        setVideos(data)
    }
)}, []);

    return (
            <div className="recommended">
        <h1>TV Series</h1>
        <div className="recommended-items">
            {videos.filter((flick) => {
        return flick.category === "TV Series"})
        .map((flick) => 
            <MovieBox key={flick.title} {...flick}/>)}    
        </div>
        </div>
    )
}


export default Videos;