import React from 'react';
import '../style/Authors.css'

const Authors = ({ authors }) => {
    React.useEffect(() => {
        console.log(authors);
    })
    return (
        <div className="authors-container">
            <ol>
                {authors.map((author) =>
                    <li key={author.id}>{`${author.name} ${author.last_name}`}</li>
                )}
            </ol>
        </div>
    )
}

export default Authors;
