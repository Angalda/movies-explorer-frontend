import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const { pathname } = useLocation();
    return (
        <footer className={`footer__container  ${pathname === '/profile' ? 'footer__container_hidden' : ''} ${pathname === '/signup' ? 'footer__container_hidden' : ''} ${pathname === '/signin' ? 'footer__container_hidden' : ''}`}>
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
                <p className="footer__copyright">© 2020</p>
                <ul className="footer__links-list">
                    <li className="footer__link-item"><a href="https://practicum.yandex.ru" target="blank" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__link-item"><a href="https://angalda.github.io" target="blank" className="footer__link">Github</a></li>
                    <li className="footer__link-item"><a href="https://www.facebook.com" target="blank" className="footer__link">Facebook</a></li>

                </ul>
            </div>

        </footer>
    )
}
