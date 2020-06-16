import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavMenu.module.scss';

let NavMenu = (props) => {
    return (
            <div className={styles.navMenu}>
                <div className={styles.link}>
                    <NavLink activeClassName={styles.activeLink} to='/magazine'>
                        Магазин
                    </NavLink>
                </div>
                <div className={styles.link}>
                    <NavLink activeClassName={styles.activeLink} to='/basket'>
                        Корзина
                    </NavLink>
                </div>
                <div className={styles.link}>
                    <NavLink activeClassName={styles.activeLink} to='/repairs'>
                        Ремонт
                    </NavLink>
                </div>
                <div className={styles.link}>
                    <NavLink activeClassName={styles.activeLink} to='/contacts'>
                        Контакты
                    </NavLink>
                </div>
            </div>
    );
}

export default NavMenu;
