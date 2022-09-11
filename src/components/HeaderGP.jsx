// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/gplogo.png'
import '../styles/header.css'
// import { AuthContext } from './../context/index';

const HeaderGP = () => {
    // const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <div className="header">
            <div className="header__container">
                <Link to='/' className='header__logo'>
                    <h1>ТОЧКА</h1>
                    <img className='header__logo-icon' src={logo} alt="Логотип точки роста" />
                    <h1>РОСТА</h1>
                    <span></span>
                    <div className="school-info__container">
                        <h3>МБОУ "Школа № 14"</h3>
                        <h3>г. Полысаево</h3>
                        <h3>Кемеровская область</h3>
                    </div>
                </Link>
                <div className="navbar">
                    <ul className='navbar__menu'>
                        <li><span><p>МЕНЮ</p></span>
                            <ul>
                                <li><Link to="/about" className='navbar__menu-link'>Общая информация о центре</Link></li>
                                <li><Link to="/docs" className='navbar__menu-link'>Документы центра</Link></li>
                                <li><Link to="/programs" className='navbar__menu-link'>Образовательные программы центра</Link></li>
                                <li><Link to="/mtb" className='navbar__menu-link'>Материально-техническая база центра</Link></li>
                                <li><Link to="/events" className='navbar__menu-link'>Мероприятия в центре</Link></li>
                                <li><Link to="/teachers" className='navbar__menu-link'>Педагоги центра</Link></li>
                                <li><Link to="/subinfo" className='navbar__menu-link'>Дополнительная информация</Link></li>
                                <li><Link to="/contacts" className='navbar__menu-link'>Обратная связь</Link></li>
                                <li><Link to="/galery" className='navbar__menu-link'>Галерея</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* {isAuth
                    ?
                    <Link to="/login" className="enter-btn">
                        <div>
                            ВЫЙТИ
                        </div>
                    </Link>
                    :
                    <Link to="/login" className="enter-btn">
                        <div>
                            ВОЙТИ
                        </div>
                    </Link>
                } */}
            </div>
        </div>
    );
};

export default HeaderGP;