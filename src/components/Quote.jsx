import React from 'react';
import '../assets/style/Quote.css'
const Quote = (props) => {
    return(
        <div className="quote-container">
            <h3 >"{props.quote}"</h3>
            <h4 className="quote-author"> {props.authorName} {props.authorLastName} </h4>
        </div>
    );
}

export { Quote }