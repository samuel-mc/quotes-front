import React from 'react';
import { Quote } from './Quote';

const Main = () => {

    const [quotes, setQuotes] =  React.useState();
    const [authors, setAuthors] =  React.useState();
    const [loading, setLoading] =  React.useState(false);

    const fetchApi = async (url, callback) => {
        await fetch(url )
        .then(response => response.json())
        .then(json => callback(json))
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false);
        })
    }

    React.useEffect(() =>  {
        setLoading(true);
        fetchApi('http://localhost:3030/quotes/', setQuotes );
        fetchApi('http://localhost:3030/authors/', setAuthors );
    }, []);

    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <>
            <div className="main-quotes_container">
                <h2 className="main-quotes_container title"> Frases </h2>
                {
                    quotes &&
                    quotes.quotes.map(quote =>
                        <Quote
                        quote = {quote.quote}
                        authorName = {quote.author.name}
                        authorLastName = {quote.author.last_name}
                        />
                        )
                    }
            </div>
        </>
    );
}

export { Main }