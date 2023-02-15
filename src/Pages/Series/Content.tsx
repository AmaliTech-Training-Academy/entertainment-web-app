import Input from '../../Components/Input';
import './Content.css'
import Videos from './Videos';



const Content = () =>{
    return (
        <div className="content">
            <Input placeholder="Search for TV series"/>
            <h2>TV-series</h2>
            <Videos/>
        </div>
    )
}

export default Content;