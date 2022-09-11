import React from 'react';
import pic from '../assets/galery/pic2.jpg'
import pic1 from '../assets/galery/C3874dX9cTg.jpg'
import pic2 from '../assets/galery/jUta97gGK2E.jpg'
import pic3 from '../assets/galery/lRbs1uoTPSg.jpg'
import pic4 from '../assets/galery/NeRkNixEZxQ.jpg'
import pic5 from '../assets/galery/x3NoSWl4boc.jpg'

import '../styles/galeryPage.css'

const GaleryPage = () => {
    return (
        <div>
            <h1 className='galery__title'>Галерея центра "точка роста"</h1>
            <div className="galery__container">
                <div className="galery__item">
                    <img className='galery__item__image' src={pic} alt="ff" />
                    <div className='galery__item__descrtiption'>Некоторое описание картинки</div>
                </div>
                <div className="galery__item">
                    <img className='galery__item__image' src={pic1} alt="ff" />
                    <div className='galery__item__descrtiption'>Учебный кабинет в центре "Точка роста"</div>
                </div>
                <div className="galery__item">
                    <img className='galery__item__image' src={pic2} alt="ff" />
                    <div className='galery__item__descrtiption'>Некоторое описание картинки</div>
                </div>
                <div className="galery__item">
                    <img className='galery__item__image' src={pic3} alt="ff" />
                    <div className='galery__item__descrtiption'>Некоторое описание картинки</div>
                </div>
                <div className="galery__item">
                    <img className='galery__item__image' src={pic4} alt="ff" />
                    <div className='galery__item__descrtiption'>Некоторое описание картинки</div>
                </div>
                <div className="galery__item">
                    <img className='galery__item__image' src={pic5} alt="ff" />
                    <div className='galery__item__descrtiption'>Некоторое описание картинки</div>
                </div>
            </div>
        </div>
    );
};

export default GaleryPage;