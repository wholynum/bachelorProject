import ButtonGP from './UI/button/ButtonGP';
import '../styles/programsItem.css'

const programsItem = (props) => {
    return (
        <div className='program'>
            <div className="program__content">
                <div className="program__content-title">{props.program.title}</div>
                <div className="program__content-body">
                    {props.program.description}
                </div>
                <div className="program__content-url">
                    <a href={props.program.document_url} target="_blank" rel='noreferrer'>Документ программы в формате PDF</a>
                </div>

            </div>
            <div className="program__btn">
                <ButtonGP onClick={() => props.remove(props.program)}>Удалить</ButtonGP>
            </div>
        </div>
    );
};

export default programsItem;