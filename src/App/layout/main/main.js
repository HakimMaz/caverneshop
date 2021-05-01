import React from 'react';
import MainMenu from '../../component/MainMenu/MainMenu';
import SlidingBook from '../../component/SlidingBook/SlidingBook';
import './main.css'
function main(props) {
    return (
        <div className='main'>
            <MainMenu/>
             <SlidingBook/>
            {/* <BestSellingBook/>  */}
            
        </div>
    );
}

export default main;