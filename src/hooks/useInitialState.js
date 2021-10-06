import React from 'react'

const useInitialState = (setLoading, updateData) => {
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
        fetchApi('https://quotes-chidas.herokuapp.com/quotes/', setQuotes );
        console.log("Quotes: ", quotes.quotes);
        fetchApi('https://quotes-chidas.herokuapp.com/quotes/random', setQuoteRamdon );
        fetchApi('https://quotes-chidas.herokuapp.com/authors/', setAuthors );
        setLoading(true);
    }, [updateData]);

    return {
        quotes,
        quoteRandom,
        authors
    }
}


export default useInitialState;