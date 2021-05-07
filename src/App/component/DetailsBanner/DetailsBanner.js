import React from 'react';
import Slider from 'react-slick';
import DetailBook from '../DetailBook/DetailBook'
import './DetailsBanner.css';
function DetailsBanner(props) {
    const settings = {
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='details-banner'>
            <Slider {...settings}>

             <DetailBook/>
             <DetailBook/>
             <DetailBook/>
             
            </Slider>
             
        </div>
    );
}

export default DetailsBanner;