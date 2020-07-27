import React from 'react';

const Square = props => {
let ring = '';
if (props.ring) {
    ring = 'o'
}
let squareClass = ['square'];
if (!props.open) {
    squareClass.push('squareClose');
} else {
    squareClass.push('squareOpen');
}

    return (
        <div className={squareClass.join(' ')} onClick={props.click}><p className="ring">{ring}</p></div>
    );
}

export default Square;