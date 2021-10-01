import React from 'react'

const useInitialState = (setLoading) => {
    const [quotes, setQuotes] =  React.useState([]);
    const [quoteRandom, setQuoteRamdon] =  React.useState([]);
    const [authors, setAuthors] =  React.useState();

    const fetchApi = async (url, callback) => {
        setLoading(true);
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
        fetchApi('http://localhost:3030/quotes/random', setQuoteRamdon );
        fetchApi('http://localhost:3030/authors/', setAuthors );
        setLoading(true);
    }, []);

    return {
        quotes,
        quoteRandom,
        authors
    }
}


export default useInitialState;