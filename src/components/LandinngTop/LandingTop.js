import landingLogo from '../../images/landing-logo.svg';

export default function LandingTop() {
  return (
    <div className="landing-top__container">
      <h2 className="landing-top__description">Учебный проект студента факультета Веб-разработки.</h2>
      <div className="landing-top__img-container">
        <img src={landingLogo} className="landing-top__img" />
      </div>
    </div>
  )
}