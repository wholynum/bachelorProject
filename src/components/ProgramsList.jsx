import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProgramsItem from './ProgramsItem';
import '../styles/programsList.css'

const ProgramsList = ({programs, remove}) => {
    return (
        <div>
            <TransitionGroup>
                {programs.map(program => 
                    <CSSTransition
                        key={program.id}
                        timeout={600}
                        classNames="program"
                    >
                        <ProgramsItem remove={remove} program={program}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default ProgramsList;