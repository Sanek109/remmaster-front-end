import React from 'react';
import vk from './../../image/icon_network/icon_vk.png';
import instagram from './../../image/icon_network/icon_instagram.png';
import s from './Footer.module.scss';


let Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div><h3>РЕММАСТЕР</h3></div>
                <div className={s.iconNetwork}>
                    <a href='https://vk.com/bobr_remont_telefonov_remmaste7' target="_blank">
                        <img src={vk} alt='vk'/>
                    </a>
                    <a href='https://www.instagram.com/remmaster_bobruisk/' target='_blank'>
                        <img src={instagram} alt='instagram'/>
                    </a>
                </div>
                <div><h3>© 2020 ВСЕ ПРАВА ЗАЩИЩЕНЫ</h3></div>
            </div>
        </div>
    );
}

export default Footer;
