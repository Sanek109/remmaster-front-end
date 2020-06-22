import React from 'react';
import s from './Contacts.module.scss'
import YandexMap from "../YandexMap/YandexMap";

const Contacts = (props) => {
    return <div className={s.wrapper}>
        <div className={s.wrapperContacts}>
        <div>
            <h3>Адрес мастерской:</h3>
            <p>г. Бобруйск, ул. Советская, д. 97/26, этаж 3, каб. 70</p>
        </div>
        <div>
            <h3>Адрес магазина:</h3>
            <p>г. Бобруйск, ул. Советская, д. 97/26, этаж 1</p>
        </div>
        <div>
            <h3>Телефоны:</h3>
            <p>8029 675 34 28 (A1)</p>
            <p>8029 339 70 60 (A1)</p>
        </div>
        </div>
        <div className={s.wrapperMap}>
            <h3>Мы на карте:</h3>
            <YandexMap />
        </div>

    </div>
}

export default Contacts;
