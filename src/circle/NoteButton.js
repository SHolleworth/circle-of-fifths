import React from 'react';
import './styles/noteButton.css'

const NoteButton = (props) => {
    return (
        <g 
            transform={
            `rotate(${props.animatedRotation + 30 * props.index} 100 60)
            translate(0 -40)
            rotate(${-props.animatedRotation - 30 * props.index} 100 60)`}
        >
            <circle id={props.note + 'Button'} className={'noteCircle'}/>
            <text 
                id={props.note}
                className={'noteLetter'}
                x={'97.5'} y={'62.5'}
            >{props.note}</text>
        </g>
    );
};

export default NoteButton;