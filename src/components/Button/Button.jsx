import React from 'react'
// import PropTypes from 'prop-types'

export function Button({ onClick }) {
    return (
        <>
            <button
                className={'Button'}
                type="button"
                onClick={onClick}
            >
                Load More
            </button>
        </>
    )
}

// Button.propTypes = {}


