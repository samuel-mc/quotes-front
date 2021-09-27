import React from 'react';
import '../assets/style/Header.css'
const Header = () => {
    return (
        <header className="header">
            <ul>
                <li className="header-item desktop"> Inicio </li>
                <li className="header-item desktop"> Frases </li>
                <li className="header-item desktop"> Autores </li>
            </ul>
        </header>
    );
}

export { Header }