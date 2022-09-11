import { useState } from "react";
import InputGP from './UI/input/InputGP';
import ButtonGP from './UI/button/ButtonGP';
import '../styles/teacherAddForm.css'

const TeacherAddForm = ({create}) => {

    const [teacher, setTeacher] = useState({
        name: '',
        post: '',
        education_type: '',
        education_info: '',
        qualification_category: '',
        work_experience: '',
        sub_info: ''
    })

    function addNewTeacher(e) {
        e.preventDefault();
        const newTeacher = {
            ...teacher, id: Date.now()
        }
        create(newTeacher)
        setTeacher({
            name: '',
            post: '',
            education_type: '',
            education_info: '',
            qualification_category: '',
            work_experience: '',
            sub_info: ''
        })
    }



    return (
        <form>
            <h2>Добавление педагога</h2>
            <div className="input__container">
                <div className="input__item">
                    <InputGP value={teacher.name} onChange={e => setTeacher({...teacher, name: e.target.value})} type="text" placeholder="Имя"/>
                    <InputGP value={teacher.post} onChange={e => setTeacher({...teacher, post: e.target.value})} type="text" placeholder="Должность"/>
                    <InputGP value={teacher.education_type} onChange={e => setTeacher({...teacher, education_type: e.target.value})} type="text" placeholder="Тип образования"/>
                </div>
                <div className="input__item">
                    <InputGP value={teacher.qualification_category} onChange={e => setTeacher({...teacher, qualification_category: e.target.value})} type="text" placeholder="Квалификационная категория"/>
                    <InputGP value={teacher.work_experience} onChange={e => setTeacher({...teacher, work_experience: e.target.value})} type="text" placeholder="Стаж"/>
                    <InputGP value={teacher.sub_info} onChange={e => setTeacher({...teacher, sub_info: e.target.value})} type="text" placeholder="Дополнительная информация"/>
                </div>
            </div>
            <InputGP value={teacher.education_info} onChange={e => setTeacher({...teacher, education_info: e.target.value})} type="text" placeholder="Информация о полученном образовании"/>
            <ButtonGP onClick={addNewTeacher}>Добавить</ButtonGP>
        </form>
    );
};

export default TeacherAddForm;