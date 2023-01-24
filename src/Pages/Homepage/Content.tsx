import './Content.css'
import Hero from '../../Components/Hero';


const Content = () =>{
    return (
        <div className="content">
            <Hero/>
            <div className="recommended">
            <h1>
                Recommended
            </h1>
            </div>
        </div>
    )
}

export default Content;