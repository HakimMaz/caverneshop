import React from 'react';
import './Header.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import InputSearch from '../InputSearch/InputSearch';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
function Header(props) {
    return (
        <div className='container-header' >
                <div className='header-left'>
                    <HeaderLogo />
                    <InputSearch />
                </div>
                <div className='header-right'>
                    <p>FAQ</p>
                    <p>Track order</p>
                    <RiShoppingCartLine />
                    <button />
                </div>
        </div>
    );
}

export default Header;