import React from 'react';
import NavMenu from "../NavMenu/NavMenu";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <div className={s.headerBlock}>
            <NavLink exact to='/'>
                <h3>РЕММАСТЕР</h3>
            </NavLink>
            <NavMenu/>
        </div>
    );
}

export default Header;
