import Input from '../../Components/SearchBar';
import './Content.css'
import Videos from './Videos';



const Content = () =>{
    return (
        <div className="content">
            <Input placeholder="Search for TV series"/>
            <Videos/>
        </div>
    )
}

export default Content;