import './Content.css'
import Hero from './Hero.jsx';
import Options from './Recommended';
// import { useState } from 'react';



const Content = () =>{
    return (
        <div className="content">
            <Hero/>
            <Options/>
            </div>
    )
}

export default Content;