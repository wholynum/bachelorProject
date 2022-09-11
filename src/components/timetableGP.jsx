import '../styles/timetable.css'

const timetableGP = () => {
    return (
        <div className='timetable__container'>
            <div style={{width: 300}} className="timetable__col teachers">
                <div className="timetable__item-day">
                    Учитель\день недели
                </div>
                <div className="timetable__item-lesson">
                    <p className='lesson-title'>Информатика</p>
                    <p>Алева Елена Николаевна</p>
                </div>
                <div style={{height: 133}} className="timetable__item-lesson">
                    <p className='lesson-title'>Безопасный мир</p>
                    <p>Артемьева Наталья Александровна</p>
                </div>
                <div style={{height: 114}} className="timetable__item-lesson">
                    <p className='lesson-title'>Робототехника</p>
                    <p>Ефимова Екатерина Павловна</p>
                </div>
                <div className="timetable__item-lesson">
                    <p className='lesson-title'>3D моделирование</p>
                    <p>Ефимова Екатерина Павловна</p>
                </div>
                <div style={{height: 95}} className="timetable__item-lesson">
                    <p className='lesson-title'>Промышленный дизайн</p>
                    <p>Плисенко Наталья Гавриловна</p>
                </div>
                <div style={{height: 76}} className="timetable__item-lesson">
                    <p className='lesson-title'>Медиастудия</p>
                    <p>Медведева Анастасия Викторовна</p>
                </div>
            </div>
            <div className="timetable__col">
                <div className="timetable__item-day">
                    <p>Понедельник</p>
                </div>
                <div className="timetable__item">
                    <p>12:50-13:25</p>
                    <p style={{color: 'red'}}>5 класс</p>
                </div>
                <div className="timetable__item">
                    <p>12:50-13:25</p>
                    <p style={{color: 'red'}}>6 класс</p>
                    <p>13:30-14:10</p>
                    <p>14:20-15:00</p>
                    <p>14:20-15:00</p>
                    <p>15:05-15:50</p>
                    <p style={{color: 'red'}}>7 класс</p>
                </div>
                <div style={{height: 114}} className="timetable__item">
                    <p>11:25-12:35</p>
                    <p style={{color: 'red'}}>1-в класс</p>
                </div>
                <div style={{height: 57}} className="timetable__item">
                    <p>13:30-14:10</p>
                    <p style={{color: 'red'}}>5-7 классы</p>
                </div>
                <div style={{height: 95}} className="timetable__item">
                    <p>15:00-16:30</p>
                    <p>16:35-18:25</p>
                    <p style={{color: 'red'}}>11A класс</p>
                </div>
                <div style={{height: 76}} className="timetable__item">

                </div>
            </div>
            <div className="timetable__col">
                <div className="timetable__item-day">
                    <p>Вторник</p>
                </div>
                <div style={{height: 38}} className="timetable__item">

                </div>
                <div style={{height: 133}} className="timetable__item">

                </div>
                <div className="timetable__item">
                    <p>10:00-11:10</p>
                    <p style={{color: 'red'}}>3-д класс</p>
                    <p>11:20-12:00</p>
                    <p style={{color: 'red'}}>1 класс</p>
                    <p>12:10-13:20</p>
                    <p style={{color: 'red'}}>4-в класс</p>
                </div>
                <div style={{height: 57}} className="timetable__item">
                    <p>13:30-14:50</p>
                    <p style={{color: 'red'}}>5-7 классы</p>
                </div>
                <div style={{height: 95}} className="timetable__item">

                </div>
                <div style={{height: 76}} className="timetable__item">

                </div>
            </div>
            <div className="timetable__col">
                <div className="timetable__item-day">
                    <p>Среда</p>
                </div>
                <div className="timetable__item">
                    <p>12:50-13:25</p>
                    <p style={{color: 'red'}}>5 класс</p>
                </div>
                <div style={{height: 133}} className="timetable__item">

                </div>
                <div style={{height: 114}} className="timetable__item">
                    <p>12:10-12:50</p>
                    <p style={{color: 'red'}}>1-а класс</p>
                    <p>13:00-14:10</p>
                    <p style={{color: 'red'}}>2-б класс</p>
                </div>
                <div style={{height: 57}} className="timetable__item">
                    <p>10:10-11:20</p>
                    <p style={{color: 'red'}}>6-8 классы</p>
                </div>
                <div className="timetable__item">
                    <p>12:50-13:25</p>
                    <p>13:30-14:10</p>
                    <p>15:15-15:55</p>
                    <p>16:00-16:45</p>
                    <p style={{color: 'red'}}>5 класс</p>
                </div>
                <div style={{height: 76}} className="timetable__item">

                </div>
            </div>
            <div className="timetable__col">
                <div className="timetable__item-day">
                    <p>Четверг</p>
                </div>
                <div className="timetable__item">
                    <p>12:50-13:25</p>
                    <p style={{color: 'red'}}>5 класс</p>
                </div>
                <div style={{height: 133}} className="timetable__item">

                </div>
                <div className="timetable__item">
                    <p>11:20-12:00</p>
                    <p style={{color: 'red'}}>1-б класс</p>
                    <p>12:10-13:20</p>
                    <p style={{color: 'red'}}>3-а, 3-г классы</p>
                    <p>13:30-14:40</p>
                    <p style={{color: 'red'}}>3-г класс</p>
                </div>
                <div style={{height: 57}} className="timetable__item">

                </div>
                <div style={{height: 95}} className="timetable__item">

                </div>
                <div className="timetable__item">
                    <p>12:00-12:40</p>
                    <p style={{color: 'red'}}>6, 8 класс</p>
                    <p>13:30-14:10</p>
                    <p style={{color: 'red'}}>5, 7 класс</p>
                </div>
            </div>
            <div className="timetable__col">
                <div className="timetable__item-day">
                    <p>Пятница</p>
                </div>
                <div className="timetable__item">
                    <p>12:50-13:25</p>
                    <p style={{color: 'red'}}>5 класс</p>
                </div>
                <div style={{height: 133}} className="timetable__item">

                </div>
                <div style={{height: 114}} className="timetable__item">
                    <p>11:25-12:35</p>
                    <p style={{color: 'red'}}>1-д класс</p>
                    <p>13:00-14:10</p>
                    <p style={{color: 'red'}}>3-в, 3-г классы</p>
                </div>
                <div style={{height: 57}} className="timetable__item">

                </div>
                <div style={{height: 95}} className="timetable__item">

                </div>
                <div style={{height: 76}} className="timetable__item">

                </div>
            </div>
        </div>
    );
};

export default timetableGP;