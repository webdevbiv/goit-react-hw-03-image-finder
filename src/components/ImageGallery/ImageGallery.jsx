// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    ImageGalleryItem,
    getPictures
} from 'components'
import { nanoid } from 'nanoid'


const INITIAL_STATE = {
    searchResults: null,
    error: null,
}

export class ImageGallery extends Component {
    // static propTypes = { second: third }
    state = { ...INITIAL_STATE }

    componentDidMount() {
        const {
            searchResults,
        } = this.state
        const {
            search,
            page,
            loaderOn,
            loaderOff
        } = this.props
        if (searchResults === null) {
            loaderOn()
            getPictures(search, page)
                .then(res => res.json())
                .catch(error => this.setState({ error }))
                .then(searchResults => {
                    const hits = searchResults.hits
                    this.setState({ searchResults: hits })
                })
                .finally(loaderOff())
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            search,
            page,
            loaderOn,
            loaderOff
        } = this.props

        if (prevProps.search !== this.props.search) {
            loaderOn()
            getPictures(search, page)
                .then(res => res.json())
                .catch(error => this.setState({ error }))
                .then(searchResults => {
                    const hits = searchResults.hits
                    console.log(searchResults)
                    this.setState({ searchResults: hits })
                })
                .finally(loaderOff())
        }
        if (prevProps.page < this.props.page) {
            loaderOn()
            getPictures(search, page)
                .then(res => res.json())
                .catch(error => this.setState({ error }))
                .then(searchResults => {
                    const hits = searchResults.hits
                    this.setState((prev) => ({
                        searchResults: [...prev.searchResults, ...hits]
                    }))
                })
                .finally(loaderOff())
        }
    }

    render() {
        const { searchResults } = this.state
        const { modal } = this.props
        return (
            <>
                {searchResults &&
                    <ul className={'ImageGallery'} >
                        {searchResults.map(item =>
                        (<ImageGalleryItem
                            onClick={modal}
                            data={item}
                            key={nanoid(6)} />
                        ))}
                    </ul>
                }
            </>
        )
    }
}

