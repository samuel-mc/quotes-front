import React from 'react'
import '../assets/style/Quotes.css';
import { Quote } from '../components/Quote';

const Quotes = ({ quotes }) => {
    return (
        <>  
            <section className="quotes-section">
                <button type="button" className="addQuote-button"> Agregar Frase</button>

                <input placeholder="Buscar Por Autor" className="input-findAuthor" />

                <div className="quotes-section-container">
                    {quotes.quotes.map( (quote) => 
                        <Quote 
                            quote={quote.quote}
                            authorName={quote.author.name}
                            authorLastName={quote.author.last_name} 
                        /> 
                    )}
                </div>
            </section>
        </>
    )
}

export default Quotes
