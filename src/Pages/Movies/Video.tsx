
import Movie from '../../data.json'
import BookmarkSVG from './Bookmark'
// import Link from './Linked'
import './Video.css'

const Video = () => {
    return (
        
            <div className="movie">
                {/* <h2>Trending</h2> */}
                <div className="movie-items">
                    {
                        Movie.filter((item) => {
                            return item.category === 'Movie'
                        }).map((item)=> (
                            <div className="movies" key={item.title}>
                                <div className="bookmark-icon">
                                    <BookmarkSVG/>
                                    {/* <Link movie={'Moive'} handleAddBookmark={true} handleRemoveBookmark={false}/> */}
                                {/* <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg> */}
                                </div>
                                <div className="image">
                                    <img className="large" src={item.thumbnail.regular.large} alt = ''/>
                                    <img className="medium" src={item.thumbnail.regular.medium} alt = ''/>
                                    <img className="small" src={item.thumbnail.regular.small} alt = ''/>
                                </div>
                                <div className='play-items'>
                                    <div className="play-icon">
                                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg> 
                                <h3> Play</h3>                                    
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="about">
                                        {item.year} <div className="oval"></div> <img src={item.logo} alt = ''/> {item.category} <div className="oval"></div> {item.rating}
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
    )
}


export default Video;