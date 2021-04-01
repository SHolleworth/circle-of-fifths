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
    const{ cx, cy, r } = props.svgDimensions

    const icons = [c, g, d, a, e, b, fs, db, ab, eb, bb, f]

    return (
        <g 
            transform={
            `rotate(${props.animatedRotation + 30 * props.index} ${cx} ${(cy)})
            translate(0 -${r})
            rotate(${-props.animatedRotation - 30 * props.index}  ${cx} ${(cy)})`}
        >
            <circle 
                id={props.note + 'Button'} className={'noteCircle'}
                cx={cx} cy={cy}
                r={5.5}
            />

            <image
                id={props.note}
                href={icons[props.index]} 
                x={cx-3}
                y={cy-3}
                height={6}
                width={6}
            />
        </g>
    );
};

export default NoteButton;