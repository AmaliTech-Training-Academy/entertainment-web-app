import Input from "../../Components/Input"
import './Hero.css'
import Trending from '../../data.json'
import BookmarkSVG from "../../Components/BookmarkButton"

const Hero = () => {
    return (
        <header>
            <Input/>
            <div className="trending">
                <h1>Trending</h1>
                <div className="trending-items">
                    {
                        Trending.filter((item) => {
                            return item.isTrending
                        }).map((item)=> (
                            <div className="trend" key={item.title}>
                                <div className="bookmark-icon">
                                    <BookmarkSVG/>
                                </div>
                                <div className="image">
                                    <img className="large" src={item.thumbnail.trending?.large} />
                                    <img className="small" src={item.thumbnail.trending?.small} />
                                </div>
                                <div className="item-info">
                                    <div className="about">
                                        <span>{item.year}</span>  <div className="oval"></div>  <span><img src={item.logo} /></span> {item.category} <div className="oval"></div>  <span>{item.rating}</span>
                                    </div>
                                    <h1 className="item-title">
                                    {item.title}
                                    </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
        </header>
    )
}


export default Hero;