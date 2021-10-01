import React from 'react';
import '../assets/style/Main.css'
const Main = ({ authors, quoteRandom, quoteRandomAuthor }) => {

    return (
        <>
            <div className="main-quotes">
                <div className="main-quotes-container">
                    <p className="title">Frase Random</p>
                        <>
                            <q className="quote">{quoteRandom.quote}</q>
                            {quoteRandom.quote && <p className="author">{`${quoteRandom.author.last_name}, ${quoteRandom.author.name}`}</p>}
                        </>
                </div>
                <div className="main-quotes-container">
                    <p className="title">Top Autores</p>
                        {authors &&
                            <>
                                <p className="authors">1. {authors[0].name} {authors[0].last_name}</p>
                                <p className="authors">2. {authors[1].name} {authors[1].last_name}</p>
                            </>
                        }
                </div>
            </div>
        </>
    );
}

export { Main }