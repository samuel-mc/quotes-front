import React from 'react';
import '../assets/style/Footer.css'

const Footer = () => {
    return (
        <footer className="footer footerMobile">
            <ul>
                <li className="footer-item mobile"> <i class="fas fa-home"></i> </li>
                <li className="footer-item mobile"> Frases </li>
                <li className="footer-item mobile"> Autores </li>
                <li className="footer-item mobile plusButton"><b> + </b></li>

                <li className="footer-item desktop"> Un producto de <a href="./"> samuel-mc </a>  </li>

            </ul>
        </footer>
    );
}

export { Footer };