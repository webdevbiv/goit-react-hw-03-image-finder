import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handlePressESC)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlePressESC)
    }

    handlePressESC = (e) => {
        if (e.code === 'Escape') this.props.closeModal()
    }

    render() {
        return (
            <div className={'Overlay'} onClick={() => this.props.closeModal()}>
                <div className={'Modal'} >
                    <img
                        src={this.props.picture}
                        alt={this.props.alt}
                        onClick={() => this.props.closeModal()}
                    />
                </div>
            </div>
        )
    }
}

// Modal.propTypes = {}


