export default function FilterCheckbox() {
    return (
        <div className="filterCheckbox">
           <input className="filterCheckbox__input" type="checkbox" id="shortFilm"/>
           <label htmlFor="shortFilm" className="filterCheckbox__label">Короткометражки</label>
        </div>
    )
}