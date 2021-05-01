import React from 'react';
import './HeaderItem.css'
function HeaderItem({title}) {
    return (
        <div className='header-item'>
            <p> {title}</p>
            
        </div>
    );
}

export default HeaderItem;