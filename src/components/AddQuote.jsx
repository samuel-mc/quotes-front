import React from 'react';
import '../style/AddQuote.css';

const axios = require('axios');

const AddQuote = ({ setAddQuote, setUpdateData }) => {
    const form = React.useRef(null);

    const handleCancel = () => {
        setAddQuote(false);
    }

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const data = {
            quote: formData.get('quote'),
            name: formData.get('name'),
            'last_name': formData.get('last_name')
        }
        postQuote(data);
        setAddQuote(false);
        setUpdateData(true);
    }

    const postQuote = async (data) => {
        await axios.post('https://quotes-chidas.herokuapp.com/quotes', {
            quote: data.quote,
            name: data.name,
            last_name: data.last_name,
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div className="add-quote">
            <div className="add-quote__form">
                <div className="add-quote__title">
                    <h2>Agrega una frase</h2>
                </div>
                <form ref={form}>
                    <label htmlFor="quote">Frase</label> <br />
                    <textarea name="quote" placeholder="Frase"></textarea> <br />
                    <label htmlFor="authorName">Autor</label> <br />
                    <input
                        name="name"
                        type="text"
                        className="input-form"
                        id="authorName"
                        placeholder="Nombre"
                    /> <br />
                    <input
                        name="last_name"
                        type="text"
                        className="input-form"
                        id="authorName"
                        placeholder="Apellido"
                    /> <br />
                    <div className="add-quote__buttons">
                        <button type="button" className="button button--agregar" onClick={handleSubmit}>Agregar</button>
                        <button type="button" className="button button--cancelar" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddQuote;
