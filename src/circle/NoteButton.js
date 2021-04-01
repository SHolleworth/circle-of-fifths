import React from 'react';
import './styles/noteButton.css'
import c from '../assets/SVG/c.svg'
import d from '../assets/SVG/d.svg'
import db from '../assets/SVG/db.svg'
import e from '../assets/SVG/e.svg'
import eb from '../assets/SVG/eb.svg'
import f from '../assets/SVG/f.svg'
import fs from '../assets/SVG/fs.svg'
import g from '../assets/SVG/g.svg'
import a from '../assets/SVG/a.svg'
import ab from '../assets/SVG/ab.svg'
import b from '../assets/SVG/b.svg'
import bb from '../assets/SVG/bb.svg'

const NoteButton = (props) => {
    const icons = [c, g, d, a, e, b, fs, db, ab, eb, bb, f]

    return (
        <g 
            transform={
            `rotate(${props.animatedRotation + 30 * props.index} 100 60)
            translate(0 -40)
            rotate(${-props.animatedRotation - 30 * props.index} 100 60)`}
        >
            <circle id={props.note + 'Button'} className={'noteCircle'}/>
            <image
                id={props.note}
                href={icons[props.index]} 
                x={96.1}
                y={56}
                height={8}
                width={8}
            />
        </g>
    );
};

export default NoteButton;