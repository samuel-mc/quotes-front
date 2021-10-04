import React from 'react';
import '../assets/style/Header.css'
const Header = ({ setView }) => {
    const handleClick = (event) => {
        setView(event.target.id);
    }

    return (
        <header className="header">
            <ul>
                <li className="header-item"> 
                    <span onClick={handleClick} id="home">
                        Inicio
                    </span>
                </li>
                <li className="header-item">
                    <span onClick={handleClick} id="quotes">
                        Frases
                    </span>
                </li>
                <li className="header-item">
                    <span onClick={handleClick} id="authors">
                        Autores
                    </span>
                </li>
            </ul>
        </header>
    );
}

export { Header }