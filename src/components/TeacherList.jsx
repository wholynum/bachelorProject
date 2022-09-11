import { TransitionGroup, CSSTransition } from "react-transition-group";
import TeacherItem from "./TeacherItem";
import '../styles/teacherList.css'

const TeacherList = ({teachers, remove}) => {
    
    return (
        <div>
            <h1 className="list__title">Педагоги центра "Точка роста"</h1>
            <TransitionGroup>
                {teachers.map(teacher => 
                    <CSSTransition
                        key={teacher.id}
                        timeout={600}
                        classNames="teacher"
                    >
                        <TeacherItem remove={remove} teacher={teacher}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default TeacherList;