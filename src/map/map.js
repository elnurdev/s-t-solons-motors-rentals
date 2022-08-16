import React from 'react';
import './map.css'
import facebook from './../img/facebook.svg';
import twitter from './../img/twitter.svg';
// import junathanPetitUnsplah from './img/jonathan-petit-unsplah.png';

function Map() {
    return (
        <div className='box'>
            <div className='left'>
                <div className='title'>Rental vehicles in Cyprus </div>
                <div className='subtitle'>Galateias Zinonos 13, 8015, Paphos, Cyprus</div>
                <div className='telNum'>+ 357 12345678 <br /> + 357 12345678</div>
                <a href='https://yandex.ru/s.t.solonos.motors@yandex.ru' className='link'>s.t.solonos.motors@yandex.ru</a>
                <div className='icons'>
                    <a href='#' className='icon'><img src={twitter} /></a>
                    <a href='#' className='icon'><img src={facebook} /></a>
                </div>
            </div>
            <iframe className='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e03f85077340e0e3641d7444c61c78030100dc51c1845b3c785131d31c3abe2&amp;source=constructor" frameborder="0"></iframe>
        </div>
    );
}

export default Map;