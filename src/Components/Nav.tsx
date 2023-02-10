import './Nav.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <div className='nav-items'>
                <div className='logo'>
                </div>
                <ul className='links'>
                    <Link to="/">
                    <li className='home'>
                    </li>   
                    </Link>
                    <Link to="/movies">
                    <li className='movies'>                        
                    </li>
                    </Link>
                    <Link to="/tv-series">
                    <li className='tv-series'>
                    </li>
                    </Link>
                    <Link to="/bookmarked">
                    <li className='bookmarked'>
                    </li>
                    </Link>                     
                </ul>
                </div>
                <div className='user-avatar'>
                </div>
        </nav>

    )
}




export default Navbar;