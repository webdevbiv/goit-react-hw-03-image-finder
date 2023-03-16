import React, { Component } from 'react'
// import PropTypes from 'prop-types'

const INITIAL_STATE = {
    search: '',
}
export class Searchbar extends Component {
    // static propTypes = { second: third }
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
            <header className="searchbar" >
                <form id='search' className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                    <input
                        name="search"
                        className="input"
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

// Searchbar.propTypes = {}


