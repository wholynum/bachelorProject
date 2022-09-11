import ButtonGP from './UI/button/ButtonGP';
import '../styles/eventItem.css'


const EventItem = (props) => {
    return (
        <div className='event'>
            <div className="event__content">
                <div className="event__content-title">{props.event.title}</div>
                <div className="event__content-pictures">

                </div>
                <div className="event__content-descr">{props.event.body}</div>
            </div>
            <div className="event__btn">
                <ButtonGP onClick={() => props.remove(props.event)}>Удалить</ButtonGP>
            </div>
        </div>
    );
};

export default EventItem;