import React from 'react';
import './style.Error.css';

function Error() {
    return (
        <div className="error" style={{
            backgroundColor: 'crimson',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            borderRadius: '5px',
            margin: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
        }}>
        <h1>Error</h1>  
        <p>Page not found!</p>
        </div>
    );
}

export default Error;
