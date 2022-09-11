import '../styles/teacherItem.css'
import ButtonGP from './UI/button/ButtonGP';

const TeacherItem = (props) => {
    return (
        <div className='teacher'>
            <div className="teacher__content">
                <div className='teacher__content-title'>{props.teacher.name}, {props.teacher.post}</div>
                <div className='teacher__content-descr'>
                    {props.teacher.education_type} образование:
                </div>
                <div className='teacher__content-descr__margin'>
                    {props.teacher.education_info}
                </div>
                <div className='teacher__content-descr'>
                    {props.teacher.qualification_category}
                </div>
                <div className='teacher__content-descr'>
                    {props.teacher.work_experience}
                </div>
                <div className='teacher__content-descr'>
                    {props.teacher.sub_info}
                </div>
            </div>
            <div className="teacher__btn">
                <ButtonGP onClick={() => props.remove(props.teacher)}>Удалить</ButtonGP>
            </div>
        </div>
    );
};

export default TeacherItem;