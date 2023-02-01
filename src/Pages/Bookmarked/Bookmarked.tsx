import Navbar from '../../Components/Nav';
import BookmarkPage from '../Movies/Bookmark';
import './Bookmarked.css'


const Book = () => {
    return(
    <main>
        <Navbar/>
        <h1>Bookmarked</h1>
        <BookmarkPage/>
    </main>
        )
}

export default Book;