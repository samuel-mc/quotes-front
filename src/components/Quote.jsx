import React from 'react';
import '../assets/style/Quote.css'
const Quote = (props) => {
    return(
        <div className="quote-container">
            <h3 className="quote">"{props.quote}"</h3>
            <h4 className="quote-author"> {props.authorName} {props.authorLastName} </h4>
            <span className="like"><i class="far fa-heart fa-2x"></i></span>
        </div>
    );
}

export { Quote }