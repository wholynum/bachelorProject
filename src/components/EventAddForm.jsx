import { useState } from 'react';
import ButtonGP from './UI/button/ButtonGP';
import InputGP from './UI/input/InputGP';
import '../styles/eventAddForm.css'


const EventAddForm = ({create}) => {

    const [event, setEvent] = useState({
        title: '',
        body: ''
    })

    function addNewEvent(e) {
        e.preventDefault();
        const newEvent = {
            ...event, id: Date.now()
        }
        create(newEvent)
        setEvent({
            title: '',
            body: ''
        })
    }    

    return (
        <form>
            <h2>Добавление мероприятия</h2>
            <div className="event-form__content">
                <InputGP value={event.title} onChange={e => setEvent({...event, title: e.target.value})} type="text" placeholder="Заголовок мероприятия"/>
                <textarea className='event__desr' value={event.body} onChange={e => setEvent({...event, body: e.target.value})} placeholder="Описание мероприятия"/>
            </div>
            <ButtonGP onClick={addNewEvent}>Добавить</ButtonGP>
        </form>
    );
};

export default EventAddForm;