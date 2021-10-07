import React from 'react';
import '../style/Quote.css'
const Quote = ({ key, quote }) => {

    const [ like, setLike ] = React.useState("no");

    const hadleLike = (quote) => {
        if (like === "no") {
            quote.likes +=1 ;
            setLike("yes")
            fetchLike(quote.id_quote, quote.author.id_author);
        } else {
            quote.likes -=1 ;
            setLike("no");
            fetchDislike(quote.id_quote, quote.author.id_author);
        }
    }

    const fetchLike = async (id_quote, id_author) => {
        await fetch(`https://quotes-chidas.herokuapp.com/quotes/like/${id_quote}/${id_author}`, {
            method: 'PUT',
        });
    }
    
    const fetchDislike = async (id_quote, id_author) => {
        await fetch(`https://quotes-chidas.herokuapp.com/quotes/dislike/${id_quote}/${id_author}`, {
            method: 'PUT',
        });
    }

    return(
        <div className="quote" key={key}>
            <h3 className="quote__content">"{quote.quote}"</h3>
            <h4 className="quote__author"> {quote.author.name} {quote.author.last_name} </h4>
            {like === "no"
                ?
                <span className="quote__like">
                    <i className="far fa-heart fa-2x" onClick={() => hadleLike(quote)}></i> {quote.likes}
                </span>
                :
                <span className="quote__like">
                    <i className="fas fa-heart fa-2x" onClick={() => hadleLike(quote)}></i> {quote.likes}
                </span>
            }
        </div>
    );
}

export { Quote }