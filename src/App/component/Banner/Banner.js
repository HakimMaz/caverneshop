import React from 'react';
import './Banner.css'
import imgBanner from '../../../assets/banner.jpg'
function Banner(props) {
    return (
        <div className='banner'>
            <img src={imgBanner}/>
        </div>
    );
}

export default Banner;