import BookmarkSVG from "./BookmarkButton";

const flickBox = ({title, thumbnail, year, logo, category, rating, bookmarked, trending }) => {
    return (
        <>
        <div className="option">
                        <div className="bookmark-icon">
                        <BookmarkSVG/>
                        </div>
                        <div className="image">
                            <img className='large' src={thumbnail.regular.large} />
                            <img className='medium' src={thumbnail.regular.medium} />
                            <img className='small' src={thumbnail.regular.small} />
                        </div>
                        <div className="item-info">
                            <div className="about">
                                {year} <div className="oval"></div> <img src={logo} /> {category} <div className="oval"></div> {rating}
                            </div>
                            <h3 className="item-title">
                            {title}
                            </h3>
                        </div>
                    </div>
        </>
    )
}

export default flickBox;