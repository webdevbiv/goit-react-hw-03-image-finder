import React from 'react'

import PropTypes from 'prop-types'

export function ImageGalleryItem({ data, onClick }) {
    return (
        <>
            {data &&
                <li className={'ImageGalleryItem'}>
                    <img className={'ImageGalleryItem-image'}
                        src={data.webformatURL}
                        alt={data.tags}
                        onClick={() => onClick(data)}
                    />
                </li>
            }
        </>
    )
}

ImageGalleryItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}


