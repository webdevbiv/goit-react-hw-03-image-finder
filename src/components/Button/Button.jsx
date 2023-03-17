import React from 'react'
// import PropTypes from 'prop-types'

export function Button({ onClick }) {
    return (
        <div className={`Button-section`}>
            <button
                className={'Button'}
                type="button"
                onClick={onClick}
            >
                Load More
            </button>
        </div>
    )
}

// Button.propTypes = {}


