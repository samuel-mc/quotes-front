import React from 'react'
import '../style/Quotes.css';
import { Quote } from '../components/Quote';

const Quotes = ({ quotes, setAddQuote, setUpdateData }) => {

    const [ searchValue, setSearchValue ] = React.useState("");

    const searchInput = React.useRef(null);

    const handleSearch = React.useCallback(() => {
        setSearchValue(searchInput.current.value)
    }, [])

    const filteredUsers = React.useMemo(() => 
    quotes.quotes.filter((quote) =>{
            return quote.author.name.toLowerCase().includes(searchValue.toLowerCase()) || quote.author.last_name.toLowerCase().includes(searchValue.toLowerCase())
        }), [ quotes, searchValue]
    )

    const handleClick = () => {
        setAddQuote(true);
    }

    return (
        <>  
            <section className="quotes">
                <button type="button" className="main__button" onClick={handleClick}> Agregar Frase</button>

                <input
                    placeholder="Buscar Por Autor"
                    className="quotes__input"
                    onChange={handleSearch}
                    ref={searchInput}
                />

                <div className="quotes__container">
                    {filteredUsers.map( (quote) => 
                        <Quote
                            key={quote.id}
                            quote={quote}
                        />
                    )}
                </div>
            </section>
        </>
    )
}

export default Quotes
