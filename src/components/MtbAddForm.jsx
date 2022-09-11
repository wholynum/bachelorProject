import {useState} from 'react';
import InputGP from './UI/input/InputGP';
import ButtonGP from './UI/button/ButtonGP';
import axios from 'axios';
import '../styles/mtbAddForm.css'

const MtbAddForm = ({create}) => {

    const [equipment, setEquipment] = useState({
        title: '',
        description: ''
    })

    function addNewEquipment(e) {
        e.preventDefault();
        const newEquipment = {
            ...equipment, id: Date.now()
        }
        create(newEquipment)
        axios.post('http://192.168.100.2:8000/mtb', newEquipment)
        setEquipment({
            title: '',
            description: ''
        })
    }  

    return (
        <div>
            <h2>Добавление средства обучения и воспитания/ оборудования</h2>
            <div className="mtb-form__content">
                <InputGP value={equipment.title} onChange={e => setEquipment({...equipment, title: e.target.value})} type="text" placeholder="Название средства обучения и воспитания /оборудования"/>
                <textarea className='mtb__desr' value={equipment.description} onChange={e => setEquipment({...equipment, description: e.target.value})} placeholder="Описание средства обучения и воспитания /оборудования"/>
            </div>
            <ButtonGP onClick={addNewEquipment}>Добавить</ButtonGP>
        </div>
    );
};

export default MtbAddForm;