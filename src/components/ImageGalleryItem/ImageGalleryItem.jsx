import React from 'react'
// import PropTypes from 'prop-types'

export function ImageGalleryItem({ data }) {

    return (
        <>
            {data && <li className="gallery-item">
                <img src={data.previewURL} alt={data.tags} />
            </li>
            }
        </>
    )
}

// ImageGalleryItem.propTypes = {}


