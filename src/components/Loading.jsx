import React from 'react'
import '../style/Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <p>Loading </p>
            <div className="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading;
