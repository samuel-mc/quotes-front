import React from 'react';
import '../style/Main.css'
const Main = ({ authors, quoteRandom, setAddQuote }) => {

    const handleClick= () => {
        setAddQuote(true);
    }

    return (
        <>
            <section className="main">
                <button type="button" className="main__button" onClick={handleClick}> Agregar Frase</button>

                <div className="main__container">
                    <p className="container__title">Frase Random</p>
                        <>
                            <q className="main__quote">{quoteRandom.quote}</q>
                            {quoteRandom.quote && <p className="quote__autor">{`${quoteRandom.author.last_name}, ${quoteRandom.author.name}`}</p>}
                        </>
                </div>
                <div className="main__container">
                    <p className="container__title">Top Autores</p>
                        {authors &&
                            <>
                                <p className="main__authors">1. {authors[0].name} {authors[0].last_name}</p>
                                <p className="main__authors">2. {authors[1].name} {authors[1].last_name}</p>
                                <p className="main__authors">3. {authors[2].name} {authors[2].last_name}</p>
                            </>
                        }
                </div>
            </section>
        </>
    );
}

export { Main }