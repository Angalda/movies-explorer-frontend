export default function AboutProject() {
  return (
    <section className="about-project__container">
      <h3 className="about-project__about">О проекте</h3>
      <ul className="about-project__list">
        <li className="about-project__item">
          <p className="about-project__item-header">Дипломный проект включал 5 этапов</p>
          <p className="about-project__item-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__item">
          <p className="about-project__item-header">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__item-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__time">
        <p className="about-project__time-item about-project__one-week">1 неделя</p>
        <p className="about-project__time-item about-project__four-week">4 недели</p>
        <p className="about-project__time-item about-project__back">Back-end</p>
        <p className="about-project__time-item about-project__front">Front-end</p>
      </div>
    </section>
  )
}