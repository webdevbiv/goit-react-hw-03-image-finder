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
          this.setState({ searchResults: hits })
        })
        .finally(this.loaderOff())
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      search,
      page,
    } = this.state

    if (prevProps.search !== this.props.search) {
      this.loaderOn()
      getPictures(search, page)
        .then(res => res.json())
        .catch(error => this.setState({ error }))
        .then(searchResults => {
          const hits = searchResults.hits
          console.log(searchResults)
          this.setState({ searchResults: hits })
        })
        .finally(this.loaderOff())
    }
    if (prevProps.page < this.props.page) {
      this.loaderOn()
      getPictures(search, page)
        .then(res => res.json())
        .catch(error => this.setState({ error }))
        .then(searchResults => {
          const hits = searchResults.hits
          this.setState((prev) => ({
            searchResults: [...prev.searchResults, ...hits]
          }))
        })
        .finally(this.loaderOff())
    }
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
      modalPictureALT
    } = this.state
    return (
      <div className={`App `}>
        <Searchbar onSubmit={this.onSubmit} />
        <div className={`Container `}>
          <ImageGallery
            searchResults={searchResults}
            modalOpen={this.modalOpen}
          />
          <Button onClick={this.onLoadMore} />
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
