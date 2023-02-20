import Input from '../../Components/SearchBar';
import './Content.css'
import Video from './Video';

const Content = () =>{
    return (
        <div className="content">
            <Input placeholder="Search for movies"/>
            <Video/>
        </div>
    )
}

export default Content;