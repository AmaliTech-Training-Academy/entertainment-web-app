import Regular from '../../data.json'
import './Recommended.css'

const Options = () => {
    return(
        <div className="recommended">
        <h2>Recommended for you</h2>
        <div className="recommended-items">
            {
                Regular.filter((item) => {
                    return !item.isTrending
                }).map((item)=> (
                    <div className="option" key={item.title}>
                        <div className="bookmark-icon">
                        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
                        </div>
                        <div className="image">
                            <img src={item.thumbnail.regular.large} />
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