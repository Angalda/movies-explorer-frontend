import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import film1 from "../../images/films/pic1.png";
import film2 from "../../images/films/pic2.jpg";
import film3 from "../../images/films/pic3.jpg";
import film4 from "../../images/films/pic4.jpg";
import film5 from "../../images/films/pic5.jpg";
import film6 from "../../images/films/pic6.jpg";
import film7 from "../../images/films/pic7.jpg";
import film8 from "../../images/films/pic8.jpg";
import film9 from "../../images/films/pic9.jpg";
import film10 from "../../images/films/pic10.jpg";
import film11 from "../../images/films/pic11.jpg";
import film12 from "../../images/films/pic12.jpg";
import film13 from "../../images/films/pic13.jpg";
import film14 from "../../images/films/pic14.jpg";
import film15 from "../../images/films/pic15.jpg";
import film16 from "../../images/films/pic16.jpg";

export default function MoviesCardList() {
    return (
        <section className="moviesCardList">
       
                <ul className="moviesCardList__list">
                    <MoviesCard picture={film1} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film2} title={'33 слова о дизайне'} duration={'1ч42м'} select={true} />
                    <MoviesCard picture={film3} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film4} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film5} title={'33 слова о дизайне'} duration={'1ч42м'} select={true} />
                    <MoviesCard picture={film6} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film7} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film8} title={'33 слова о дизайне'} duration={'1ч42м'} select={true} />
                    <MoviesCard picture={film9} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film10} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film11} title={'33 слова о дизайне'} duration={'1ч42м'} select={true} />
                    <MoviesCard picture={film12} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film13} title={'33 слова о дизайне'} duration={'1ч42м'} select={true} />
                    <MoviesCard picture={film14} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film15} title={'33 слова о дизайне'} duration={'1ч42м'} select={false} />
                    <MoviesCard picture={film16} title={'33 слова о дизайне'} duration={'1ч42м'} select={true} />
                </ul>
        
            <div class="moviesCardList__more">
                <button type="button" className="moviesCardList__more-btn">Ещё</button>
            </div>
        </section>
    )
}