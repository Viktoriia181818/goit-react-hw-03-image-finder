import propTypes from 'prop-types';
import css from './Modal.module.css';
import { Component } from 'react';

export default class Modal extends Component {
    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
    handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.handleModalClose();
    }
  };
  render() {
    const { src, alt, handleClose } = this.props;

    return (
       <div className={css.Overlay} onClick={handleClose}>
       <div className={css.Modal}>
      <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
 

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};