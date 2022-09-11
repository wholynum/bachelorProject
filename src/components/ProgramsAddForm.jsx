import {useState} from 'react';
import ButtonGP from './UI/button/ButtonGP';
import InputGP from './UI/input/InputGP';
import '../styles/programsAddForm.css'

const ProgramsAddForm = ({create}) => {

    const [program, setProgram] = useState({
        title: '',
        description: '',
        document_url: '',
    })

    function addNewProgram(e) {
        e.preventDefault();
        const newProgram = {
            ...program, id: Date.now()
        }
        create(newProgram)
        setProgram({
            title: '',
            description: '',
            document_url: '',
        })
    }  

    return (
        <form>
            <h2>Добавление образовательной программы</h2>
            <div className="programs-form__content">
                <InputGP value={program.title} onChange={e => setProgram({...program, title: e.target.value})} type="text" placeholder="Название образовательной программы"/>
                <textarea className='program__desr' value={program.description} onChange={e => setProgram({...program, description: e.target.value})} placeholder="Описание образовательной программы"/>
                <InputGP value={program.document_url} onChange={e => setProgram({...program, document_url: e.target.value})} type="text" placeholder="Ссылка на pdf документ программы"/>
            </div>
            
            <ButtonGP onClick={addNewProgram}>Добавить</ButtonGP>
        </form>
    );
};

export default ProgramsAddForm;