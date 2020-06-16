import React from 'react';
import vk from './../../image/icon_network/icon_vk.png';
import instagram from './../../image/icon_network/icon_instagram.png';
import s from './Footer.module.scss';


let Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div><h4>РЕММАСТЕР</h4></div>
                <div className={s.iconNetwork}>
                    <a href='https://vk.com/audiquattro2000' target="_blank">
                        <img src={vk} alt='vk'/>
                    </a>
                    <a href='https://www.instagram.com/alexreactredux/' target='_blank'>
                        <img src={instagram} alt='instagram'/>
                    </a>
                </div>
                <div><h4>© 2020 Все права защищены</h4></div>
            </div>
        </div>
    );
}

export default Footer;
