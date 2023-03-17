import React, { Component } from 'react'

import {
  Button,
  ImageGallery,
  ImageGalleryItem,
  Loader,
  Modal,
  Searchbar,
  // api
} from 'components'

const INITIAL_STATE = {
  search: ''
}

export class App extends Component {
  state = { ...INITIAL_STATE }



  onSubmit = (data) => {
    console.log(data.search.length);
    this.setState({
      search: data.search
    })
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery search={this.state.search} />
        <ImageGalleryItem />
        <Loader />
        <Modal />
        <Button />
      </>
    );
  }
};
