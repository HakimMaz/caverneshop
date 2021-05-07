import React from 'react';
import './DetailBook.css';
import bookImage from '../../../assets/learn-react.png'
import { IconContext } from "react-icons";
import {AiFillStar} from 'react-icons/ai'
function DetailBook(props) {
    return (
        <div className='detail-book'>
            <img className='detail-book-image' src={bookImage}/>
            <div className='detail-book-information-section'>
                 <p>the is on fire</p>
                 <p> albert chrisotphe</p>
                 <p> $50.00</p>
                 {Array(5)
                            .fill()
                            .map((_, i) => (
                               
                                <IconContext.Provider value={{  color:'#FF5700',size:20}}> 
                                    <AiFillStar  key={i}/>
                                </IconContext.Provider>
                            ))}
                <button >hello</button>
            </div>
        </div>
    );
}

export default DetailBook;