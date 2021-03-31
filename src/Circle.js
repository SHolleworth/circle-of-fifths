import React, { useEffect, useState } from 'react' 
import ReactDOM from 'react-dom'
import mMath from './myMath'
import './index.css'
import CircleSegment from './CircleSegment'
import NoteButton from './NoteButton'

const Circle = () => {
    const [animatedRotation, setAnimatedRotation] = useState(0)
    const notes = ['c', 'g', 'd', 'a', 'e', 'b', 'fs', 'db', 'ab', 'eb', 'bb', 'f']
    const r = 40
    const dashLength = mMath.circumference(r)/12

    useEffect(() => {
        let moving = false
        let offset = 0
        let angle = 0
        let dotProduct = 0
        const svgCenter = { x: 0, y: 0 }
        const mouseDownPosition = { x: 0, y: 0 }
        const mouseDownNormal = { x: 0, y: 0 }

        const startRotationAnimation = (mouseEvent) => {
            //Get the center of the circle everytime in case the screen size has changed
            const { width, height, left, top } = document.getElementById('background').getBoundingClientRect()
            svgCenter.x = left + width/2
            svgCenter.y = top + height/2
            mouseDownPosition.x = mouseEvent.clientX - svgCenter.x
            mouseDownPosition.y = mouseEvent.clientY - svgCenter.y
            mouseDownNormal.x = mouseDownPosition.y
            mouseDownNormal.y = -mouseDownPosition.x
            moving = true
        }

        const rotate = (mouseEvent) => {
            if(moving) {
                const mousePosition = { x: mouseEvent.clientX - svgCenter.x, y: mouseEvent.clientY - svgCenter.y}
                angle = mMath.angleBetween(mousePosition, mouseDownPosition)
                dotProduct = mMath.dot(mouseDownNormal, mousePosition)
                if(dotProduct >= 0) {
                    setAnimatedRotation(offset - angle)
                }
                else {
                    setAnimatedRotation(offset + angle)
                }
            }
        }

        const saveRotation = () => {
            if(moving) {
                if(dotProduct >= 0) {
                    offset -= angle
                }
                else {
                    offset += angle
                }
                //Set the angle to be exactly on whichever segment is at the top
                const normalisedAngle = ((offset + 15) % 360)
                const segment = Math.floor(normalisedAngle/30)
                if(segment < 0) {
                    offset = 30 * (12 + segment)
                }
                else {
                    offset = 30 * segment
                }
                setAnimatedRotation(offset)
                moving = false
            }
        }

        notes.forEach((note) => {
            document.getElementById(note + 'Segment').addEventListener('mousedown', startRotationAnimation)
        })
        window.addEventListener('mouseup', saveRotation)
        window.addEventListener('mousemove', (event) => rotate(event))
    },[])

    const segments = notes.map((note, index) => (
        <CircleSegment
            note={note}
            index={index}
            strokeDasharray={[`${dashLength}, ${dashLength*11}`]}
            animatedRotation={animatedRotation}
        />
    ))

    const noteButtons = notes.map((note, index) => {
        <NoteButton
            note={note}
            index={index}
            animatedRotation={animatedRotation}
        />
    })

    return(
        <div className={'container'}>
            <div>
                <h1>{animatedRotation}</h1>
                <svg id={'background'} viewBox={'0, 0 , 100, 100'}>
                    {segments}
                    {noteButtons}
                </svg>
            </div>
        </div>
    )
}

export default Circle