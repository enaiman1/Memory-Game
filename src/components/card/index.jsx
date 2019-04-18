import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

// create a function that gives use access to the props directly
export default function Card({ 
    handleClick,
    id, 
    type, 
    flipped,
    solved,
    height, 
    width, 
    disabled 
}) {
    return <div
        // create a class name based on its flip status
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}
        // on click event that passes the id of the card we are flipping
        onClick={() => disabled? null : handleClick(id)}
    >
        {/* a div the will hold the image  */}
        <div className="flipper">
            <img
                style={{
                    height, width
                }}
                /* will change class name and src depening on if the card 
                   is on the front or back*/
                className={flipped ? 'front' : 'back'}
                src={flipped || solved ? `/img/${type}.png` : `/img/back.png`}
                // alt=""
            />
        </div>
    </div>
}
// object with all the props
Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired
}