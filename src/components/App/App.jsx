import React, { Component } from 'react'

import {
  Button,
  ImageGallery,
  Loader,
  Modal,
  Searchbar,
  getPictures,
} from 'components'

const INITIAL_STATE = {
  search: '',
  page: 1,
  showLoadMore: false,
  showModal: false,
  modalPictureURL: '',
  modalPictureALT: '',
  loader: false,
  searchResults: null,
  error: null,
}

export class App extends Component {

  state = { ...INITIAL_STATE }

  componentDidMount() {
    const {
      search,
      page,
      searchResults,
    } = this.state

    if (searchResults === null) {
      this.loaderOn()
      getPictures(search, page)
        .then(res => res.json())
        .catch(error => this.setState({ error }))
        .then(searchResults => {
          const hits = searchResults.hits
          this.showLoadMore(hits.length)
          this.setState({ searchResults: hits })
        })
        .finally(this.loaderOff())
    }
  }

  componentDidUpdate(_, prevState) {
    const {
      search,
      page,
    } = this.state

    if (prevState.search !== search) {
      this.loaderOn()
      getPictures(search, page)
        .then(res => res.json())
        .catch(error => this.setState({ error }))
        .then(searchResults => {
          const hits = searchResults.hits
          this.showLoadMore(hits.length)
          this.setState({ searchResults: hits })
        })
        .finally(this.loaderOff())
    }

    if (prevState.page < page) {
      this.loaderOn()
      getPictures(search, page)
        .then(res => res.json())
        .catch(error => this.setState({ error }))
        .then(searchResults => {
          const hits = searchResults.hits
          this.showLoadMore(hits.length)
          this.setState((prev) => ({
            searchResults: [...prev.searchResults, ...hits]
          }))
        })
        .finally(this.loaderOff())
    }
  }

  showLoadMore = (length) => {
    if (length % 12 === 0 && length !== 0) {
      return this.setState({ showLoadMore: true })
    }
    return this.setState({ showLoadMore: false })
  }

  onSubmit = (data) => {
    this.setState({
      search: (data.search).trim().toLowerCase(),
      page: 1
    })
  }

  onLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1
    }))
  }

  loaderOn = () => {
    this.setState({
      loader: true
    })
  }

  loaderOff = () => {
    this.setState({
      loader: false
    })
  }

  modalOpen = ({ largeImageURL, tags }) => {
    this.setState({
      modalPictureURL: largeImageURL,
      modalPictureALT: tags,
      showModal: true,
    })
  }

  modalClose = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const {
      searchResults,
      loader,
      showModal,
      modalPictureURL,
      modalPictureALT,
      showLoadMore
    } = this.state

    return (
      <div className={`App `}>
        <Searchbar onSubmit={this.onSubmit} />
        <div className={`Container `}>
          <ImageGallery
            searchResults={searchResults}
            modalOpen={this.modalOpen}
          />
          {showLoadMore &&
            <Button onClick={this.onLoadMore} />
          }
        </div>
        {loader && (
          <Loader />
        )}
        {showModal && (
          <Modal
            closeModal={this.modalClose}
            picture={modalPictureURL}
            alt={modalPictureALT}
          />
        )}
      </div>
    );
  }
};
