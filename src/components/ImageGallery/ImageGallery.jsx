// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ImageGalleryItem } from 'components'

const INITIAL_STATE = {
    searchResults: null,
    status: 'idle',
    page: 1,
    key: '24773665-69599298287e5482cf3fdda29',
    api: 'https://pixabay.com/api/',
    error: null,
}

export class ImageGallery extends Component {
    // static propTypes = { second: third }
    state = { ...INITIAL_STATE }
    componentDidMount() {
        const {
            api,
            key,
            page,
            searchResults,
        } = this.state
        if (searchResults === null) {
            return fetch(`${api}?&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .catch(error => this.setState({ error }))
                .then(searchResults => {
                    console.log(searchResults)
                    this.setState({ searchResults })
                })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            api,
            key,
            page,
            // loading,
            // searchResults
        } = this.state

        // const response = api.fetchSearch(this.state)
        // console.log(response.PromiseResult);
        if (prevProps.search !== this.props.search) {
            console.log(`new prop.search: ${this.props.search}`);
            fetch(`${api}?q=${this.props.search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .catch(error => this.setState({ error }))
                .then(searchResults => {
                    console.log(searchResults)
                    this.setState({ searchResults })
                })
        }
    }

    render() {
        const {
            searchResults,
            // status,
            // error
        } = this.state
        // if (status === 'idle') {
        //     return <div>Enter your search</div>
        // }
        // if (status === 'pending') {
        //     return <div>Loading...</div>
        // }
        // if (status === 'rejected') {
        //     return <div>{error}</div>
        // }
        // if (status === 'resolved') {
        //     return (
        //         <ul className="gallery">
        //             {searchResults.map(item =>
        //             (<ImageGalleryItem
        //                 data={item}
        //                 key={item.id} />
        //             ))}
        //         </ul>
        //     )
        // }
        return (
            <>
                {searchResults &&
                    <ul className={'ImageGallery'}>
                        {searchResults.hits.map(item =>
                        (<ImageGalleryItem
                            data={item}
                            key={item.id} />
                        ))}
                    </ul>
                }
            </>
        )
    }
}

