import promoImg from '../../images/promo-img.svg';

export default function Promo() {
  return (
    <section className="promo__container">
      <h2 className="promo__description">Учебный проект студента факультета Веб-разработки.</h2>
      <div className="promo__img-container">
        <img src={promoImg} className="promo__img" />
      </div>
    </section>
  )
}