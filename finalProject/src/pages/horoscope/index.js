
import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './horoscope'
import Navbar from '../../components/navbar/Navbar';
import PostFlow from '../../postflow/postFlow';

const Horoscope =() =>{
    return(
        <div className="horoscope">
        <Main />
        {/* <PostFlow/> */}
        </div>
    )
}

export default Horoscope

