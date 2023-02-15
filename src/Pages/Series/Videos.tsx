import Hello from '../../data.json'
import './Videos.css'
import BookmarkSVG from '../../Components/BookmarkButton'


const Videos = () => {
    return (
            <div className="tvSeries">
                <div className="series-items">
                    {
                        Hello.filter((item) => {
                            return item.category === 'TV Series'
                        }).map((item)=> (
                            <div className="series" key={item.title}>
                                <div className="bookmark-icon">
                                    <BookmarkSVG/>
                                </div>
                                <div className="image">
                                    <img className="large" src={item.thumbnail.regular.large} alt=''/>
                                    <img className="medium" src={item.thumbnail.regular.medium} alt='' />
                                    <img className="small" src={item.thumbnail.regular.small} alt='' />
                                </div>
                                <div className="item-info">
                                    <div className="about">
                                        {item.year} <div className="oval"></div> <img src={item.logo} alt=''/> {item.category} <div className="oval"></div> {item.rating}
                                    </div>
                                    <h1 className="item-title">
                                    {item.title}
                                    </h1>
                                </div>
                                <div className='play-items'>
                                    <div className='icon'>
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
                                    <h4>Play</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
    )
}


export default Videos;