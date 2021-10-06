import React from 'react';
import { Quote } from '../components/Quote';
import '../style/Main.css'
const Main = ({ authors, quoteRandom, setAddQuote }) => {

    const [ like, setLike ] = React.useState(false);


    const handleClick= () => {
        setAddQuote(true);
    }

    const hadleLike = () => {
        setLike(!like);
    }

    return (
        <>
            <section className="main-quotes">
                <button type="button" className="addQuote-button" onClick={handleClick}> Agregar Frase</button>

                <div className="main-quotes-container">
                    <p className="title">Frase Random</p>
                        <>
                            <q className="quote">{quoteRandom.quote}</q>
                            {quoteRandom.quote && <p className="author">{`${quoteRandom.author.last_name}, ${quoteRandom.author.name}`}</p>}
                            {!like
                                ? <span className="like"><i className="far fa-heart fa-3x" onClick={hadleLike}></i></span>
                                :<span className="like"><i className="fas fa-heart fa-3x" onClick={hadleLike}></i></span>
                            }
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
            </section>
        </>
    );
}

export { Main }