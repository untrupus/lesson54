import React from "react";
import './Tries.css';

const Tries = props => {
    return (
        <p className="tries">Tries: {props.amount}</p>
    );
}

export default Tries;