import React from 'react';
import './Book.css';
import logo from '../../../assets/learn-react.png';
import { IconContext } from "react-icons";
import {AiFillStar} from 'react-icons/ai'
function Book({title,author,price,rating,review}) {
    return (
        <div className='book-card'>
            <img src={logo} className='book-card-img' />
            <div className='book-card-info'>
                <p className='book-card-info-title'> {title}</p>
                <p className='book-card-info-author'>{author}</p>
                <div className='book-card-info-details'>
                    <div className='book-card-info-details-left'>
                        <div className='book-card-info-details-left-rating'>{Array(rating)
                            .fill()
                            .map((_, i) => (
                               
                                <IconContext.Provider value={{  color:'#FF5700',size:20}}> 
                                    <AiFillStar  key={i}/>
                                </IconContext.Provider>
                            ))}</div>
                        <p className='book-card-info-details-left-review'>(<span style={{color:'#FF7B2E',fontSize:12}}>{review}</span> Review)</p>
                    </div>
                    <p className='book-card-info-details-price'>{price}</p>
                </div>
            </div>
        </div>
    );
}

export default Book;