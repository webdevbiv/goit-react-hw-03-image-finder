import React from 'react'
// import PropTypes from 'prop-types'

export function ImageGalleryItem({ data }) {
    // console.log(data);
    return (
        <>
            {data &&
                <li className={'ImageGalleryItem'}>
                    <img className={'ImageGalleryItem-image'}
                        src={data.webformatURL}
                        alt={data.tags}
                    />
                </li>
            }
        </>
    )
}

// ImageGalleryItem.propTypes = {}

