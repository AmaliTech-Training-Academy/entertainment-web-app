import './Nav.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <div className='nav-items'>
                <div className='logo'>
                </div>
                <ul className='links'>
                    <NavLink to="/">
                    <li className='home'>
                    </li>   
                    </NavLink>
                    <NavLink to="/movies">
                    <li className='movies'>                        
                    </li>
                    </NavLink>
                    <NavLink to="/tv-series">
                    <li className='tv-series'>
                    </li>
                    </NavLink>
                    <NavLink to="/bookmarked">
                    <li className='bookmarked'>
                    </li>
                    </NavLink>                     
                </ul>
                </div>
                <div className='user-avatar'>
                </div>
        </nav>

    )
}




export default Navbar;