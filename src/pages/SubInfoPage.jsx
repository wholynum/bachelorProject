import React from 'react';
import '../styles/subInfoPage.css'
import qrvk from '../assets/images/kod.png'

const SubInfoPage = () => {
    return (
        <div className='subinfo__container'>
            <h1 className="subinfo__title">Дополнительная информация</h1>
            <div className="subinfo__content">
                <div className="subinfo__content-vk">
                    <div className="subinfo__content-vk__image">
                        <img className="subinfo__content-vk__image-img" src={qrvk} alt="qrvk" />
                    </div>
                    <div className="subinfo__content-vk__descr">
                        Центр "Точка роста" в социальной сети <a href='https://vk.com/club200731030' target="_blank" rel='noreferrer'>ВКонтакте</a>
                    </div>
                </div>
                <span className="subinfo__content-line"></span>
                <div className="subinfo__content-youtube">
                    <p><span className='you'>You</span>Tube</p>
                    <a href='https://www.youtube.com/watch?v=PUETyImuF6g' target="_blank" rel='noreferrer'>Обращение министра просвещения Российской Федерации С. С. Кравцова</a>
                    <a href='https://www.youtube.com/watch?v=hx5a6YBLAQc' target="_blank" rel='noreferrer'>VR-очки в Точке роста</a>
                    <a href='https://www.youtube.com/watch?v=-iKlA9w1LFw' target="_blank" rel='noreferrer'>Точка роста глазами детей</a>
                </div>
                <span className="subinfo__content-line"></span>
                <div className="subinfo__content-rec">
                    <p>Рекомендации по созданию Центров образования цифрового и гуманитарного профилей "Точка роста" в 2020 году</p>
                    <a href="https://shkola14.ucoz.ru/FP_SovShk/TR/tr_2020.pdf" target="_blank" rel='noreferrer'>Ознакомиться с документом</a>
                    <p>Руководство по оформлению и зонированию помещений Центров образования цифрового и гуманитарного профилей "Точка роста"</p>
                    <a href="http://guopolisaevo.my1.ru/Nac_proekt/rukovodstvo_po_oformleniju_centra_tochki-3.pdf" target="_blank" rel='noreferrer'>Ознакомиться с документом</a>
                    <p>Краткое руководство по фирменному стилю</p>
                    <a href="http://guopolisaevo.my1.ru/Nac_proekt/firstil_tochki_rosta_2020npo-1.pdf" target="_blank" rel='noreferrer'>Ознакомиться с документом</a>
                </div>
            </div>
            
        </div>
    );
};

export default SubInfoPage;