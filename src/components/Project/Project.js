export default function Project() {
  return (
    <div className="project__container">
      <h3 className="project__about">О проекте</h3>
      <ul className="project__list">
      <li className="project__item">
          <p className="project__item-header">Дипломный проект включал 5 этапов</p>
          <p className="project__item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="project__item">
          <p className="project__item-header">На выполнение диплома ушло 5 недель</p>
          <p className="project__item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
        <div className="project__time">
          <p className="project__time-item project__one-week">1 неделя</p>
          <p className="project__time-item project__four-week">4 недели</p>
          <p className="project__time-item project__back">Back-end</p>
          <p className="project__time-item project__front">Front-end</p>
        </div>
    </div>
    )
  }