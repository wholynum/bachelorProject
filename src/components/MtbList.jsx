import { TransitionGroup, CSSTransition } from "react-transition-group";
import MtbItem from './MtbItem';
import '../styles/mtbList.css'

const MtbList = ({remove, equipments}) => {
    return (
        <div>
            <h2 style={{marginTop: 40}}>Средства обучения и воспитания, оборудования центра "Точка роста"</h2>
            <TransitionGroup>
                {equipments.map(equipment => 
                    <CSSTransition
                        key={equipment.id}
                        timeout={600}
                        classNames="equipment"
                    >
                        <MtbItem remove={remove} equipment={equipment}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default MtbList;