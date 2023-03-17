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
  modalPictureALT: ''
}

export class App extends Component {
  state = { ...INITIAL_STATE }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {

    }
  }

  onSubmit = (data) => {
    // console.log(data.search.length);
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

  handleOpenModal = ({ largeImageURL, tags }) => {
    this.setState({
      modalPictureURL: largeImageURL,
      modalPictureALT: tags,
      showModal: true
    })
  }

  handleCloseModal = () => {
    console.log('click');
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          search={this.state.search}
          page={this.state.page}
          modal={this.handleOpenModal}
        />
        <Button onClick={this.onLoadMore} />
        <Loader />
        {this.state.showModal && (
          <Modal
            picture={this.state.modalPictureURL}
            alt={this.state.modalPictureALT}
            onClick={this.state.handleCloseModal}
          />
        )}
      </>
    );
  }
};
