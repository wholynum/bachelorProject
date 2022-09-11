import { TransitionGroup, CSSTransition } from "react-transition-group"
import '../styles/eventList.css'
import EventItem from './EventItem'

const EventList = ({events, remove}) => {
    return (
        <div>
            <TransitionGroup>
                {events.map(event => 
                    <CSSTransition
                        key={event.id}
                        timeout={600}
                        classNames="event"
                    >
                        <EventItem remove={remove} event={event}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default EventList;