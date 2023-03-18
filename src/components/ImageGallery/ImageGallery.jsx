import React from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

import { ImageGalleryItem } from 'components'

export function ImageGallery({ searchResults, modalOpen }) {

    return (
        <>
            {searchResults &&
                <ul className={'ImageGallery'} >
                    {searchResults.map(item =>
                    (<ImageGalleryItem
                        onClick={modalOpen}
                        data={item}
                        key={nanoid(6)} />
                    ))}
                </ul>
            }
        </>
    )
}

ImageGallery.propTypes = {
    searchResults: PropTypes.array.isRequired,
    modalOpen: PropTypes.func.isRequired
}


