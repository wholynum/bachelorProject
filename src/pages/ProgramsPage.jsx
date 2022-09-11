import React, {useState} from 'react';
import '../styles/programsPage.css'
// import axios from 'axios';
import ModalGP from '../components/UI/modal/ModalGP';
import ProgramsAddForm from '../components/ProgramsAddForm';
import ProgramsList from './../components/ProgramsList';
import ButtonGP from '../components/UI/button/ButtonGP';


const ProgramsPage = () => {
    const [programs, setPrograms] = useState([
        {
            id: 1,
            title: 'Безопасный мир',
            description: 'Дополнительная общеразвивающая программа «Безопасный мир» имеет социально-гуманитарную направленность, предназначена для обучающихся 13-15 лет, направлена на повышение уровня знаний учащихся по пожарной безопасности и правилам дорожного движения, формирование общей культуры обучающихся, на их духовно-нравственное, социальное, личностное и интеллектуальное развитие; обеспечение социальной успешности, саморазвитии самосовершенствования, сохранения и укрепления здоровья обучающихся.',
            document_url: 'https://shkola14.ucoz.ru/FP_SovShk/TR/2021/shk_14_pdo_bezopasnyj_mir_21-22.pdf'
        },
        {
            id: 2,
            title: 'Информатика',
            description: 'Дополнительная общеразвивающая программа «Информатика» имеет техническую направленность, предназначена для обучающихся 11-12 лет, предполагает знакомство с основными понятиями, используемыми в языках программирования высокого уровня, решение большого количества творческих задач, многие из которых моделируют процессы и явления из таких предметных областей, как информатика, алгебра, геометрия, география, физика, русский язык и др.',
            document_url: 'https://shkola14.ucoz.ru/FP_SovShk/TR/2021/shk_14_pdo_iinformatika_21-22.pdf'
        },
        {
            id: 3,
            title: 'Медиастудия',
            description: 'Дополнительная общеразвивающая программа «Медиастудия» имеет техническую направленность, предназначена для обучающихся 11-17 лет, ориентирована на освоение детьми основ видеомонтажа.',
            document_url: 'https://shkola14.ucoz.ru/FP_SovShk/TR/2021/shk_14_pdo_mediastudija_21-22.pdf'
        },
        {
            id: 4,
            title: 'Промышленный дизайн',
            description: 'Программа разработана на основе общеразвивающей программы технической направленности «Промышленный дизайн. Проектирование материальной среды» (авторы: Саакян С.Г., Рыжов М.В., Москва, 2019), предназначена для обучающихся 11-12 лет, направлена на междисциплинарную проектно-художественную деятельность с интегрированием естественнонаучных, технических, гуманитарных знаний, а также на развитие инженерного и художественного мышления обучающегося.',
            document_url: 'https://shkola14.ucoz.ru/FP_SovShk/TR/2021/shk_14_pdo_prom_dizajn_21-22.pdf'
        },
        {
            id: 5,
            title: 'Робототехника',
            description: 'Дополнительная общеразвивающая программа технической направленности «Робототехника» направлена на обучение детей младшего школьного возраста основным практическим умениям и навыкам работы с конструктором «LEGO». Она предполагает развитие у обучающихся мелкой моторики, умственных способностей, логического и творческого мышления, навыков конструирования. Объединяет в себе элементы игры и экспериментирования.',
            document_url: 'https://shkola14.ucoz.ru/FP_SovShk/TR/Progr/shk_14_pdo_robototekhnika_21-22.pdf'
        },
        {
            id: 6,
            title: '3D моделирование',
            description: 'Дополнительная общеразвивающая программа технической направленности «3-D моделирование» составлена для организации дополнительного образования учащихся 11-17 лет и ориентирована на обучающихся, проявляющих интересы и склонности в области информатики, математики, физики, моделирования.',
            document_url: 'https://shkola14.ucoz.ru/FP_SovShk/TR/Progr/shk_14_pdo_3d_modelirovanie_21-22.pdf'
        },
    ])
    const [modal, setModal] = useState(false);


    const createProgram = (newProgram) => {
        setPrograms([...programs, newProgram])
        setModal(false);
    }

    const removeProgram = (program) => {
        setPrograms(programs.filter(t => t.id !== program.id))
    }

    return (
        <div>
            <h1 className='propgrams-title'>Образовательные программы центра "Точка роста"</h1>

            <ModalGP visible={modal} setVisible={setModal}>
                <ProgramsAddForm create={createProgram}/>
            </ModalGP>
            <ProgramsList remove={removeProgram} programs={programs}/>
            <ButtonGP onClick={() => setModal(true)}>
                Добавить образовательную программу
            </ButtonGP>

            <h2 className='materials-title'>Методические материалы ФГАОУ ДПО "Академия Минпросвещения России"</h2>
            <div className="materials-content">
                <p>Реализация образовательных программ по предмету «Информатика» с использованием оборудования центра «Точка роста»</p>
                <a href="https://report.apkpro.ru/uploads/share/%D0%A2%D0%A0_%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0.pdf" target="_blank" rel='noreferrer'>Ознакомиться с документом</a>
                <p>Реализация образовательных программ по предмету «Основы безопасности жизнедеятельности» с использованием оборудования центра «Точка роста»</p>
                <a href="https://report.apkpro.ru/uploads/share/%D0%A2%D0%A0_%D0%9E%D0%91%D0%96.pdf" target="_blank" rel='noreferrer'>Ознакомиться с документом</a>
                <p>Реализация образовательных программ по предмету «Технология» с использованием оборудования центра «Точка роста»</p>
                <a href="https://report.apkpro.ru/uploads/share/%D0%A2%D0%A0_%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F.pdf" target="_blank" rel='noreferrer'>Ознакомиться с документом</a>
            </div>
        </div>
    );
};

export default ProgramsPage;