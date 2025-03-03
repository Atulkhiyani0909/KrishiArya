import React from 'react';

function Error({ error }) {  // Destructure 'error' directly from props
    console.log(error);
    return (
        <>
            <h1>Error: {error}</h1>
        </>
    );
}

export default Error;
