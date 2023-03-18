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

    closeModal = (e) => {
        if (e.target === e.currentTarget) {
            this.props.closeModal()
        }
    }

    render() {
        const {
            picture,
            alt
        } = this.props
        return (
            <div
                className={'Overlay'}
                onClick={this.closeModal}
            >
                <div
                    className={'Modal'}
                // onClick={e => { e.stopPropagation() }}
                >
                    <img
                        src={picture}
                        alt={alt}
                    />
                </div>
            </div>
        )
    }
}

// Modal.propTypes = {}


