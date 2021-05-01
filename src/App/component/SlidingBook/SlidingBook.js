import React from 'react';
import Slider from 'react-slick';
import HeaderItem from '../HeaderItem/HeaderItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlidingBook.css'
function SlidingBook(props) {
    const settings = {
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}  className='sliding-book' >
            <div className='sliding-book-item1' >1</div>
            <div className='sliding-book-item2' >2</div>
            <div className='sliding-book-item3' >3</div>

        </Slider>
    );
}

export default SlidingBook;