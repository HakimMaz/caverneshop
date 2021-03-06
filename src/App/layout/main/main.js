import React from 'react';
import MainMenu from '../../component/MainMenu/MainMenu';
import SlidingBook from '../../component/SlidingBook/SlidingBook';
import Book from '../../component/Book/Book';
import Banner from '../../component/Banner/Banner';
import DetailsBanner from '../../component/DetailsBanner/DetailsBanner'
import './main.css'

function Main(props) {
    const books = [
        { id: 1, title: 'The behind', author: 'J.B slame', price: '16.2$', rating: 2, review: 10 },
        { id: 2, title: 'Become a Mentalist', author: 'Didine Clash', price: '83.9$', rating: 5, review: 216 },
        { id: 3, title: 'Lost in paradise', author: 'El-Motanaby', price: '112$', rating: 3, review: 45 },
        { id: 4, title: '25 hours of sickness', author: 'Meriem BenDjamal', price: '16.2$', rating: 3, review: 3 },
        { id: 5, title: 'Learn React', author: 'O.Reilly', price: '16.2$', rating: 4, review: 17 },
        { id: 6, title: 'Learn Angular', author: 'O.Reilly', price: '23.2$', rating: 3, review: 170 }
    ]
    return (
        <div className='main'>
            <div className='main-selling-book'>
                <MainMenu />
                <SlidingBook />

                <div className='selling-book'>
                    <p className='selling-book-title'> Best Selling books Ever</p>
                    <div className='selling-book-slider'>
                        {books.map(book=>
                             <Book key={book.id} title={book.title} author={book.author} price={book.price} rating={book.rating} review={book.review}/>
                            )}

                    </div>
                </div>
            </div>
            <div className='main-banner'>
                <div className='main-banner-section'>

                    <div className='main-banner-details'>
                        <div className='main-banner-details-header'>
                            <p className='main-banner-details-header-title'> Featured This Week</p>
                            <p className='main-banner-details-header-title-view-more'>View All</p>
                        </div>
                        <DetailsBanner />

                    </div>
                    <Banner />
                </div>
            </div>


        </div>
    );
}

export default Main;