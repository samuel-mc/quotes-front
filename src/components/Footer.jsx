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
                <li className="footer-item mobile" onClick={handleClickOnHome}>
                    <i class="fas fa-home fa-2x"></i>
                    <span> Home </span>
                </li>
                <li className="footer-item mobile" onClick={handleClickOnQuotes}>
                    <i class="fas fa-quote-right fa-2x"></i>
                    <span> Frases </span>
                </li>
                <li className="footer-item mobile" onClick={handleClickOnAuthors}>
                <i class="fas fa-users fa-2x"></i>
                    <span> Autores </span>
                </li>
                <li className="footer-item mobile plusButton" onClick={handleAdd}><b> + </b></li>

                <li className="footer-item desktop"> Un producto de <a href="./"> samuel-mc </a>  </li>

            </ul>
        </footer>
    );
}

export { Footer };