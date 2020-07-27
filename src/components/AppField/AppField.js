import React from "react";
import './AppField.css';
import Square from "../Square/Square";


const AppField = props => {
    let newSquares = props.content.map((square) => {
        return (
            <Square key={square.id}
                    open={square.open}
                    ring={square.hasItem}
                    click={() => props.click(square.id)}
            />
        )
    });
    return (
        <div className="AppField">{newSquares}</div>
    )
}

export default AppField;