import Input from "../../Components/SearchBar"
import './Hero.css'
import Trending from '../../data.json'
import BookmarkSVG from "../../Components/BookmarkButton"
import { useEffect, useState } from 'react'
import MovieBox from '../../Components/MovieBox'




const API_URL = "https://entertainment-web-app-api.onrender.com/items";


const Hero = () => {
    const [flick, setFlick] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) =>{ 
        setFlick(data)
    })
    }, []);

    const searchFlick = async(e)=>{
        e.preventDefault();
        console.log("Searching")
        try {
            const url = `https://entertainment-web-app-api.onrender.com/items?q=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setFlick(data.results)
        } catch (e) {
        }
    }

    return (
        <header>
            <Input placeholder = "Search for movies or TV series"/>
                <div className="trending">
        <h1>Trending</h1>
        <div className="trending-items">
            {flick.filter((flick) => {return flick.isTrending}).map((flick) => 
        <div className="trend" key={flick.title}>
            <div className="bookmark-icon">
                <BookmarkSVG/>
            </div>
            <div className="image">
                <img className="large" src={flick.thumbnail.trending?.large} />
                <img className="small" src={flick.thumbnail.trending?.small} />
            </div>
            <div className="item-info">
                <div className="about">
                    <span>{flick.year}</span>  <div className="oval"></div>  <span><img src={flick.logo} /></span> {flick.category} <div className="oval"></div>  <span>{flick.rating}</span>
                </div>
                <h1 className="item-title">
                    {flick.title}
                </h1>
            </div>    
        </div>
        )}
        </div>
        </div>
        </header>
    )  
}                  


export default Hero;