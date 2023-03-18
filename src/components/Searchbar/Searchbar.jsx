import React, { Component } from 'react'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
    search: '',
}
export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = { ...INITIAL_STATE }

    handleChange = (e) => {
        const key = e.target.name
        this.setState({
            [key]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const search = this.state
        this.props.onSubmit(search)
        this.setState({ ...INITIAL_STATE })
        e.target.reset()
    }

    render() {
        return (
            <header className={'Searchbar'} >
                <form
                    id='search'
                    className={'SearchForm'}
                    onSubmit={this.handleSubmit}>
                    <button
                        type="submit"
                        className={'SearchForm-button'} >
                        <span className={'SearchForm-button-label'}>Search</span>
                    </button>
                    <input
                        name="search"
                        className={'SearchForm-input'}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}



