import React from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";

const mapData = {
    center: [53.142648, 29.224496],
    zoom: 15,
};

const coordinates = [
    [53.142490, 29.224350]
];

const YandexMap = () => (
    <YMaps>
        <Map defaultState={mapData}>
            {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
        </Map>
    </YMaps>
);

export default YandexMap;
