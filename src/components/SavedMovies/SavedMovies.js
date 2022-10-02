import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import film1 from "../../images/films/pic1.png";
import film2 from "../../images/films/pic2.jpg";
import film3 from "../../images/films/pic3.jpg";

export default function MoviesCardList() {
    return (
        <section className="moviesCardList">
            <div className="moviesCardList__list-wrap">
                <ul className="moviesCardList__list moviesCardList__list_saved">
                    <MoviesCard picture={film1} title={'33 слова о дизайне'} duration={'1ч42м'} />
                    <MoviesCard picture={film2} title={'33 слова о дизайне'} duration={'1ч42м'} />
                    <MoviesCard picture={film3} title={'33 слова о дизайне'} duration={'1ч42м'} />
                </ul>
            </div>

        </section>
    )
}