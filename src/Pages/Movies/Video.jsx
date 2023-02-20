import { useEffect, useState } from 'react'
// import Link from './Linked'
import MovieBox from '../../Components/MovieBox'


const API_URL = "https://entertainment-web-app-api.onrender.com/items";

const Video = () => {
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
        <h1>Movies</h1>
        <div className="recommended-items">
            {videos.filter((flick) => {
        return flick.category === "Movie"})
        .map((flick) => 
            <MovieBox key={flick.title} {...flick}/>)}    
        </div>
        </div>
    )}




    export default Video;