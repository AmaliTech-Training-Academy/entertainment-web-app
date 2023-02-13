import BookmarkSVG from '../../Components/BookmarkButton'
import Regular from '../../data.json'
import './Recommended.css'


const Options = () => {
    return(
        <div className="recommended">
        <h1>Recommended for you</h1>
        <div className="recommended-items">
            {
                Regular.filter((item) => {
                    return !item.isTrending
                }).map((item)=> (
                    <div className="option" key={item.title}>
                        <div className="bookmark-icon">
                        <BookmarkSVG/>
                        </div>
                        <div className="image">
                            <img className='large' src={item.thumbnail.regular.large} />
                            <img className='medium' src={item.thumbnail.regular.medium} />
                            <img className='small' src={item.thumbnail.regular.small} />
                        </div>
                        <div className="item-info">
                            <div className="about">
                                {item.year} <div className="oval"></div> <img src={item.logo} /> {item.category} <div className="oval"></div> {item.rating}
                            </div>
                            <h3 className="item-title">
                            {item.title}
                            </h3>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>

    )
}

export default Options;