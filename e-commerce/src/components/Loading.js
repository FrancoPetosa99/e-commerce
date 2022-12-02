import React from "react";
import Spinner from 'react-bootstrap/Spinner';

function Loading(){


    return(
        <div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
        </div>
    )
}


export default Loading;