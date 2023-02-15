import Input from '../../Components/Input';
import './Content.css'
import Video from './Video';

const Content = () =>{
    return (
        <div className="content">
            <Input placeholder="Search for movies"/>
            <h2>Movies</h2>
            <Video/>
        </div>
    )
}

export default Content;