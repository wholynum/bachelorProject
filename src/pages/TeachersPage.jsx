import React, { useState } from 'react';
import TeacherAddForm from "../components/TeacherAddForm";
import ButtonGP from "../components/UI/button/ButtonGP";
import ModalGP from "../components/UI/modal/ModalGP";
import TeacherList from './../components/TeacherList';
// import axios from 'axios';


const TeachersPage = () => {
    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: 'Медведева Анастасия Викторовна',
            post: 'руководитель центра "Точка роста"',
            education_type: 'Высшее',
            education_info: 'ФГБОУ ВО "Новосибирский государственный образовательный университет" , 2019 г., направление подготовки - "Педагогическое образование", образовательная программа - "Музыкальное образование"',
            qualification_category: 'Первая квалификационная категория (год аттестации - 2021)',
            work_experience: 'Общий стаж - 2 года, пед. стаж - 2 года, стаж работы в должности - 1 год',
            sub_info: ''
        },
        {
            id: 2,
            name: 'Алева Елена Николаевна',
            post: 'учитель математики, информатики',
            education_type: 'Высшее',
            education_info: 'НГПИ, 2000 год, специальность - "Педагогика и методика начального образования", специализация: "Математика", проф. переподготовка: ООО "Инфоурок", 2020 г., "Информатика: теория и методика преподавания в образовательной организации".',
            qualification_category: 'Первая квалификационная категория (год аттестации - 2019)',
            work_experience: 'Общий стаж - 22 года, пед. стаж - 22 года, стаж работы в должности - 7 лет',
            sub_info: 'Повышение квалификации - 2020 год, КРИПКиПРО'
        },
        {
            id: 3,
            name: 'Артемьева Наталья Александровна',
            post: 'учитель ОБЖ',
            education_type: 'Высшее',
            education_info: 'Кемеровское областное училище культуры, 2002 г., специальность - "Социально-культурная деятельность и народное художественное творчество", проф. переподготовка: ГОУ ДПО (ПК) С "КРИПКиПРО", 2014 г., "Педагогика, психология и методика преподавания основ безопасности жизнедеятельности", проф. переподготовка: ГОУ ДПО (ПК) С "КРИПКиПРО", 2007 г., образовательная программа "Менеджмент в социальной сфере"',
            qualification_category: 'Квалификационной категории не имеет.',
            work_experience: 'Общий стаж - 29 лет, пед. стаж - 22 года, стаж работы в должности - 2 года',
            sub_info: 'Повышение квалификации - 2019 год, КРИПКиПРО'
        },
        {
            id: 4,
            name: 'Ефимова Екатерина Павловна',
            post: 'педагог дополнительного образования',
            education_type: 'Среднее профессиональное',
            education_info: 'ГПОУ «Полысаевский индустриальный техникум», 2019 г.,  специальность «09.02.05. Прикладная информатика (по отраслям)»',
            qualification_category: 'Квалификационной категории не имеет',
            work_experience: 'Общий стаж - 0 лет, пед. стаж - 0 лет, стаж работы в должности - 0 лет',
            sub_info: ''
        },
        {
            id: 5,
            name: 'Плисенко Наталья Гавриловна',
            post: 'учитель технологии',
            education_type: 'Высшее',
            education_info: 'НГПИ, 1993 г., специальность - "Общетехнические дисциплины и труд"',
            qualification_category: 'Высшая квалификационная категория (год аттестации - 2020)',
            work_experience: 'Общий стаж - 42 года, пед. стаж - 35 лет, стаж работы в должности - 21 год',
            sub_info: 'Повышение квалификации - 2021 год, КРИПКиПРО. Награждена Почетной грамотой Министерства образования и науки РФ. Награждена медалью "За достойное воспитание детей"'
        },
    ])

    const [modal, setModal] = useState(false);

    const createTeacher = (newTeacher) => {
        setTeachers([...teachers, newTeacher])
        setModal(false);
    }

    const removeTeacher = (teacher) => {
        setTeachers(teachers.filter(t => t.id !== teacher.id))
    }

    return (
        <div>
            <ModalGP visible={modal} setVisible={setModal}>
                <TeacherAddForm create={createTeacher}/>
            </ModalGP>
            <TeacherList remove={removeTeacher} teachers={teachers}/>
            <ButtonGP onClick={() => setModal(true)}>
                Добавить педагога
            </ButtonGP>
        </div>
    );
};

export default TeachersPage;