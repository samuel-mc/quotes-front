import React from 'react';
import '../style/Footer.css'

const Footer = ({ setAddQuote, setView }) => {

    const handleAdd =() =>{
        setAddQuote(true);
    }

    const handleClickOnHome = () =>{
        setView("home");
    }
    
    const handleClickOnQuotes = () =>{
        setView("quotes");
    }
    
    const handleClickOnAuthors = () =>{
        setView("authors");
    }

    return (
        <footer className="footer footerMobile">
            <ul>
                <li className="footer__item mobile" onClick={handleClickOnHome}>
                    <i className="fas fa-home fa-2x"></i>
                    <span> Home </span>
                </li>
                <li className="footer__item mobile" onClick={handleClickOnQuotes}>
                    <i className="fas fa-quote-right fa-2x"></i>
                    <span> Frases </span>
                </li>
                <li className="footer__item mobile" onClick={handleClickOnAuthors}>
                <i className="fas fa-users fa-2x"></i>
                    <span> Autores </span>
                </li>
                <li className="footer__item mobile" onClick={handleAdd}>
                    <span className="footer__button"> + </span>
                </li>

                <li className="footer__item desktop"> Un producto de <a href="./"> samuel-mc </a>  </li>

            </ul>
        </footer>
    );
}

export { Footer };