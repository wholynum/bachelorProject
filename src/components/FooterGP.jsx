import '../styles/footer.css'
import footerLogo from '../assets/images/footerlogoicon.png'
const FooterGP = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__logo">
                    <img className='footer__container__logo-icon' src={footerLogo} alt="Логотип точки роста"/>
                </div>
                <div className="footer__container__description">
                    <p>Перейти на официальный сайт <a href="https://shkola14.ucoz.ru" target="_blank" rel='noreferrer'>МБОУ "Школа № 14"</a></p>
                    <span></span>
                    <p>Все материалы данного сайта являются объектами авторского права МБОУ "Школа № 14". Запрещается копирование, распространение(в том числе путем копирования на другие сайты и ресурсы в Интернете) без предварительного согласия правообладателя © 2022</p>
                </div>
            </div>
        </div>
    );
};

export default FooterGP;