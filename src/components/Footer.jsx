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
                <li className="footer-item mobile" onClick={handleClickOnHome}> <i class="fas fa-home"></i> </li>
                <li className="footer-item mobile" onClick={handleClickOnQuotes}> Frases </li>
                <li className="footer-item mobile" onClick={handleClickOnAuthors}> Autores </li>
                <li className="footer-item mobile plusButton" onClick={handleAdd}><b> + </b></li>

                <li className="footer-item desktop"> Un producto de <a href="./"> samuel-mc </a>  </li>

            </ul>
        </footer>
    );
}

export { Footer };