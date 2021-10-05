import React from 'react'
import '../style/Quotes.css';
import { Quote } from '../components/Quote';

const Quotes = ({ quotes, setAddQuote }) => {

    const handleClick = () => {
        setAddQuote(true);
    }
    return (
        <>  
            <section className="quotes-section">
                <button type="button" className="addQuote-button" onClick={handleClick}> Agregar Frase</button>

                <input placeholder="Buscar Por Autor" className="input-findAuthor" />

                <div className="quotes-section-container">
                    {quotes.quotes.map( (quote) => 
                        <Quote
                            like={"no"}
                            key={quote.id}
                            quote={quote}
                        />
                    )}
                </div>
            </section>
        </>
    )
}

export default Quotes
