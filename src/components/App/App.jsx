import React, { Component } from 'react'

import {
  Button,
  ImageGallery,
  Loader,
  Modal,
  Searchbar,
} from 'components'

const INITIAL_STATE = {
  search: '',
  page: 1,
  showModal: false,
  modalPictureURL: '',
  modalPictureALT: '',
  loader: false
}

export class App extends Component {
  state = { ...INITIAL_STATE }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {

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

  handleOpenModal = ({ largeImageURL, tags }) => {
    this.setState({
      modalPictureURL: largeImageURL,
      modalPictureALT: tags,
      showModal: true,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          loader={this.state.loader}
          loaderOn={this.loaderOn}
          loaderOff={this.loaderOff}
          search={this.state.search}
          page={this.state.page}
          modal={this.handleOpenModal}
        />
        <Button onClick={this.onLoadMore} />
        {this.state.loader && (
          <Loader />
        )}
        {this.state.showModal && (
          <Modal
            closeModal={this.handleCloseModal}
            picture={this.state.modalPictureURL}
            alt={this.state.modalPictureALT}
          />
        )}
      </>
    );
  }
};
