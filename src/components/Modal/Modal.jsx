import React from 'react'
// import PropTypes from 'prop-types'

export function Modal({ picture, alt, onClick }) {
    return (
        <div className={'Overlay'} >
            <div className={'Modal'}>
                <img src={picture} alt={alt} onClick={() => onClick} />
            </div>
        </div>
    )
}

// Modal.propTypes = {}


