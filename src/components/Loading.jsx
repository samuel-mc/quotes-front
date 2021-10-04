import React from 'react'
import '../assets/style/Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <p className="loading-text">Loading </p>
            <div className="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading;
