import React from 'react';
import './Header.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import InputSearch from '../InputSearch/InputSearch';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import HeaderItem from '../HeaderItem/HeaderItem';
function Header(props) {
    return (
        <div className='container-header' >
                <div className='header-left'>
                    <HeaderLogo />
                    <InputSearch />
                </div>
                <div className='header-right'>
                    <HeaderItem title='FAQ'/>
                    <HeaderItem title='Track order'/>
                    <IconContext.Provider value={{  color:'#fff',size:70}}> 

                    <RiShoppingCartLine />

                    </IconContext.Provider>
                    <button className='header-button'>
                        <p>Sign in</p>
                    </button>
                </div>
        </div>
    );
}

export default Header;