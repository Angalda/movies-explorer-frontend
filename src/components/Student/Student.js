import icon from '../../images/icons/arrow.svg';
import student from '../../images/photo-student.jpg';

export default function Student(){
    return (
        <div className="student__container">
            <h3 className="student__header">Студент</h3>
            <div className="student__about">
                <div className="student__about-text">
                    <p className="student__name">Виталий</p>
                    <p className="student__brief">Фронтенд-разработчик, 30 лет</p>
                    <p className="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <div className="student__social-links">
                        <a href="#" className="student__social-link">Facebook</a>
                        <a href="#" className="student__social-link">Github</a>
                    </div>
                </div>
                <img src={student} className="student__about-photo" />
            </div>
            
            <p className="student__portfolio-title">Портфолио</p>
            <ul className="student__portfolio">
                <li className="student__portfolio-item"><a href="#" className="student__portfolio-link">Статичный сайт</a><img src={icon}className="student__portfolio-icon"></img></li>
                <li className="student__portfolio-item"><a href="#" className="student__portfolio-link">Адаптивный сайт</a><img src={icon}className="student__portfolio-icon"></img></li>
                <li className="student__portfolio-item"><a href="#" className="student__portfolio-link">Одностраничное приложение</a><img src={icon}className="student__portfolio-icon"></img></li>
            </ul>

        </div>
    )
}