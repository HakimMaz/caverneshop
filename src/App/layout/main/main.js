import React from 'react';
import MainMenu from '../../component/MainMenu/MainMenu';
import SlidingBook from '../../component/SlidingBook/SlidingBook';
import Book from '../../component/Book/Book';
import './main.css'
function Main(props) {
    return (
        <div className='main'>
            <MainMenu />
            <SlidingBook />
            {/* <BestSellingBook/>  */}
            <div className='selling-book'>
                <p className='selling-book-title'> Best Selling books Ever</p>
                <div className='selling-book-slider'>
                    <Book title='The behind' author='J.B slame' price='16.2$' rating={2} review={10} />
                    <Book title='Become a Mentalist' author='Didine Clash' price='83.9$' rating={5} review={216} />
                    <Book title='Lost in paradise' author='El-Motanaby' price='112$' rating={3} review={45} />
                    <Book title='25 hours of sickness' author='Meriem BenDjamal' price='16.2$' rating={3} review={3} />
                    <Book title='Learn React' author='O.Reilly' price='16.2$' rating={4} review={17} />
                </div>
            </div>
           

        </div>
    );
}

export default Main;