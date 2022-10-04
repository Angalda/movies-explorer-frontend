import icon from '../../images/icons/arrow.svg';
import student from '../../images/photo-student.jpg';

export default function AboutMe(){
    return (
        <section className="aboutMe__container">
            <h3 className="aboutMe__header">Студент</h3>
            <div className="aboutMe__about">
                <div className="aboutMe__about-text">
                    <p className="aboutMe__name">Виталий</p>
                    <p className="aboutMe__brief">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <div className="aboutMe__social-links">
                        <a href="https://www.facebook.com" className="aboutMe__social-link">Facebook</a>
                        <a href="https://github.com/Angalda" className="aboutMe__social-link">Github</a>
                    </div>
                </div>
                <img src={student} className="aboutMe__about-photo" />
            </div>
            
            <p className="aboutMe__portfolio-title">Портфолио</p>
            <ul className="aboutMe__portfolio">
            <li className="aboutMe__portfolio-item"><a href="https://angalda.github.io/how-to-learn/" target="blank" className="aboutMe__portfolio-link"><p className="aboutMe__portfolio-text">Статичный сайт</p><img src={icon}className="aboutMe__portfolio-icon"></img></a></li>
            <li className="aboutMe__portfolio-item"><a href="https://angalda.github.io/russian-travel" target="blank" className="aboutMe__portfolio-link"><p className="aboutMe__portfolio-text">Адаптивный сайт</p><img src={icon}className="aboutMe__portfolio-icon"></img></a></li>
            <li className="aboutMe__portfolio-item"><a href="https://angalda.github.io/mesto" target="blank" className="aboutMe__portfolio-link"><p className="aboutMe__portfolio-text">Одностраничное приложение</p><img src={icon}className="aboutMe__portfolio-icon"></img></a></li>
            </ul>

        </section>
    )
}