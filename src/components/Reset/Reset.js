import React from "react";
import './Reset.css';

const Reset = props => {
    return (
        <button type="button" onClick={props.game} className="btnReset">Reset</button>
    );
}

export default Reset;