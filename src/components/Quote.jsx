import React from 'react';
import '../style/Quote.css'
const Quote = ({ quote }) => {

    const [ like, setLike ] = React.useState("no");

    const hadleLike = () => {
        like === "no" ? setLike("yes") : setLike("no");
    }
    return(
        <div className="quote-container">
            <h3 className="quote">"{quote.quote}"</h3>
            <h4 className="quote-author"> {quote.author.name} {quote.author.last_name} </h4>
            {like === "no"
                ?
                <span className="like">
                    <i className="far fa-heart fa-2x" onClick={hadleLike}></i> {quote.likes}
                </span>
                :
                <span className="like">
                    <i className="fas fa-heart fa-2x" onClick={hadleLike}></i> {quote.likes}
                </span>
            }
        </div>
    );
}

export { Quote }