import React from 'react'
const axios = require('axios');

const useInitialState = (setLoading, updateData) => {
    const [quotes, setQuotes] =  React.useState([]);
    const [quoteRandom, setQuoteRamdon] =  React.useState([]);
    const [authors, setAuthors] =  React.useState();

    const fetchApi = async (url, callback) => {
        await axios.get(url)
        .then((response) => {
            callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
          })
        .finally(() => {
            setLoading(false);
        })
    }

    React.useEffect(() =>  {
        setLoading(true);
        fetchApi('https://quotes-chidas.herokuapp.com/quotes/', setQuotes );
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