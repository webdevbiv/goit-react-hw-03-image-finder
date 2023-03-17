import React from 'react'
import { Audio } from 'react-loader-spinner'
// import PropTypes from 'prop-types'

export function Loader() {
    return (
        <div className={'Overlay'}>
            <Audio
                height="80"
                width="80"
                radius="9"
                color="#3F51B5"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>
    )
}

// Loader.propTypes = {}


