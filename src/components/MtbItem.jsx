import ButtonGP from './UI/button/ButtonGP';
import '../styles/mtbItem.css'

const MtbItem = (props) => {
    return (
        <div className='equipment'>
            <div className="equipment__content">
                <div className="equipment__content-title">{props.equipment.title}</div>
            </div>
            <div className="equipment__content-descr">
                {props.equipment.description}
            </div>
            <div className="equipment__content-picture"></div>
            <div className="equipment__btn">
                <ButtonGP onClick={() => props.remove(props.equipment)}>Удалить</ButtonGP>
            </div>
        </div>
    );
};

export default MtbItem;