import React from 'react';
import './InputSearch.css'
import {BsSearch} from 'react-icons/bs';
import { IconContext } from "react-icons";
function InputSearch(props) {
    return (
        <div className='container-input-search'>
            <input className='input-search' type='text' placeholder='Find your book by other or publisher'/>
            <IconContext.Provider value={{  color:'#FF1616',className: 'input-icon' }}>
            <BsSearch />      
            </IconContext.Provider>
        </div>
    );
}

export default InputSearch;