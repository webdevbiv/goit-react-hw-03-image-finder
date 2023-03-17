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
  page: 1
}

export class App extends Component {
  state = { ...INITIAL_STATE }

  onSubmit = (data) => {
    console.log(data.search.length);
    this.setState({
      search: data.search,
      page: 1
    })
  }

  onLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1
    }))
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          search={this.state.search}
          page={this.state.page}
        />
        <Button onClick={this.onLoadMore} />
        <Loader />
        <Modal />

      </>
    );
  }
};
