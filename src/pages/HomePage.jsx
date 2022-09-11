import React from 'react';
import '../styles/homePage.css'
import schoolPic from '../assets/images/shkola.jpg'

const HomePage = () => {
    return (
        <div className="home__container">
            <h1 className="home__title">Точка роста</h1>
            <div className="home__about">
                <div className="home__about-picture">
                    <img src={schoolPic} alt="Фото школы" />
                </div>
                <div className="home__about-description">
                    Центры «Точка роста» - это структурные подразделения общеобразовательных организаций, осуществляющих образовательную деятельность по основным и дополнительным общеобразовательным программам и расположенных в сельской местности и малых городах России.
                    <p>Данный центр создан на базе МБОУ "Школа №14".</p>
                </div>
            </div>
            <div className="home__content">
                <div className="home__purposes">
                    <div className='home__content-title'>Цели</div>
                    <p>Создание условий для внедрения новых методов обучения и воспитания</p>
                    <span></span>
                    <p>Обеспечение образовательными технологиями для освоения обучающимися основных и дополнительных общеобразовательных программ цифрового, естественнонаучного, технического и гуманитарного профилей</p>
                    <span></span>
                    <p>Совершенствование методов обучения</p>
                </div>
                <div className="home__space">
                    <div className='home__content-title'>Общественное пространоство</div>
                    <p>Развитиe общекультурных компетенций и цифровой грамотности населения</p>
                    <span></span>
                    <p>Шахматное образование</p>
                    <span></span>
                    <p>Проектная деятельность</p>
                    <span></span>
                    <p>Творческая и социальная самореализация детей, педагогов, родительской общественности</p>
                </div>
            </div>
            <div className="home__federal">
                Проект реализуется в рамках федерального проекта «Современная школа» национального проекта «Образование».
            </div>
        </div>
    );
};

export default HomePage;