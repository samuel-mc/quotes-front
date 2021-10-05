import React from 'react';
import '../style/AddQuote.css'

const AddQuote = ({ setAddQuote }) => {

    const handleCancel = () => {
        setAddQuote(false);
    }

    return (
        <div className="addQuote-container">
            <div className="addQuote-form">
                <div className="addQuote-form-title">
                    <h2>Agrega una frase</h2>
                </div>
                <form>
                    <label for="quote">Frase</label> <br />
                    <textarea placeholder="Frase"></textarea> <br />
                    <label htmlFor="authorName">Autor</label> <br />
                    <input type="text" className="input-form" id="authorName" placeholder="Nombre"/> <br />
                    <input type="text" className="input-form" id="authorName" placeholder="Apellido"/> <br />
                    <div className="buttons-container">
                        <button type="button" className="btn btn-agregar">Agregar</button>
                        <button type="button" className="btn btn-cancelar" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddQuote;
