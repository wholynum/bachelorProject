import React, {useState} from 'react';
import ModalGP from '../components/UI/modal/ModalGP';
import MtbAddForm from '../components/MtbAddForm';
import MtbList from './../components/MtbList';
import ButtonGP from '../components/UI/button/ButtonGP';
import '../styles/mtbPage.css'

const MtbPage = () => {
    const [equipments, setEquipments] = useState([
        {
            id: 1,
            title: 'Цифровое оборудование',
            description: 'ПАК Цифровая образовательная среда в составе: МФУ, ноутбук учителя, мобильный класс (25 ноутбуков). Дополнительное оборудование: шлем виртуальной реальности, квадрокоптер тип-1, квадрокоптер тип-2, смартфон, микрофон.',
        },
        {
            id: 2,
            title: 'Оборудование для занятий по предмету  "Технология"',
            description: 'Аддитивное оборудование: 3D принтер с пластиком. Промышленное оборудование: аккумуляторная дрель-винтоверт, набор бит, набор сверл универсальный, клеевой пистолет с комплектом запасных стержней, цифровой штангенциркуль, электролобзик. Ручной инструмент: ручной лобзик, 200 мм, ручной лобзик, 300 мм, канцелярские ножи, набор пилок для лобзика.',
        },
        {
            id: 3,
            title: 'Оборудование для изучения ОБЖ и основ оказания первой помощи',
            description: 'тренажёр-манекен для отработки сердечно-лёгочной реанимации, тренажёр-манекен для отработки приемов удаления инородного тела из верхних дыхательных путей, набор имитаторов травм и поражений, шина лестничная, воротник шейный',
        },
        {
            id: 4,
            title: 'Оборудование для медиазоны',
            description: 'Фотоаппарат с объективом, карта памяти для фотоаппарата/видеокамеры, штатив',
        },
        {
            id: 5,
            title: 'Оборудование и мебель для шахматной зоны',
            description: "Комплект для обучения шахматам: шахматы, часы шахматные.",
        },
        {
            id: 6,
            title: 'Мебель',
            description: 'Одноместные и двух местные столы для обучающихся, регулируемые стулья, пуфы, стол и стул учителя, стеллажи',
        },
    ])

    const [modal, setModal] = useState(false);

    const createEquipment = (newEquipment) => {
        setEquipments([...equipments, newEquipment])
        setModal(false);
    }

    const removeEquipment = (equipment) => {
        setEquipments(equipments.filter(t => t.id !== equipment.id))
    }

    return (
        <div>
            <h1 className="mtb__title">Материально-техническая база центра "Точка роста"</h1>
            <div className="classroom__descriprion">
                <h2 className='classroom__descriprion-title'>Помещения центра "Точка роста"</h2>
                <p className='classroom__descriprion-body'>Центр цифрового и гуманитарного профилей "Точка роста" на базе МБОУ "Школа № 14" располагается в двух кабинетах:</p>
                <p className='classroom__descriprion-body__tab'>В учебном классе площадью 52 квадратных метра.</p>
                <p className='classroom__descriprion-body__tab'>В кабинете для коворкинга (зона для занятий проектной деятельностью и внеурочных мероприятий) площадью 60 квадратных метров.</p>
                <p className='classroom__descriprion-body'>Финансирование ремонта кабинетов произведено за счет средств местного бюджета в размере 890 тысяч рублей, а также за счет привлечения внебюджетных средств в размере 31 тысячи рублей.</p>
                <p className='classroom__descriprion-body'>Мебель для учебного класса и коворкинга приобретены за счет средств местного бюджета в размере 327,6 тысяч рублей.</p>
                <p className='classroom__descriprion-body'>За счет привлечения внебюджетных средств в размере 23 тысяч рублей приобретен проектор для кабинета коворкинга.</p>
            </div>
            <ModalGP visible={modal} setVisible={setModal}>
                <MtbAddForm create={createEquipment}/>
            </ModalGP>
            <MtbList remove={removeEquipment} equipments={equipments}/>
            <ButtonGP onClick={() => setModal(true)}>
                Добавить оборудование
            </ButtonGP>
            <div className="mtb_downlinks">
                <p>Список оборудования, поставленного в Центр "Точка роста"</p>
                <a href="https://shkola14.ucoz.ru/FP_SovShk/TR/shk_14_edinyj_spisok_postavlennogo_oborudovanija_v.pdf" target="_blank" rel='noreferrer'>Ознакомиться</a>
                <p>Список мебели, установленной в Центре "Точка роста"</p>
                <a href="https://shkola14.ucoz.ru/FP_SovShk/TR/shk_14_edinyj_spisok_mebeli_v_tochku_rosta.pdf" target="_blank" rel='noreferrer'>Ознакомиться</a>
            </div>
        </div>
    );
};

export default MtbPage;