import React, { Component } from 'react';
import ReactModal from 'react-modal';

export class Modal extends Component {

  render() {
    const { showModal, useFull, toggleModal, currentSlide } = this.props;
    const { name, description, frontend, backend, github, img, url } = currentSlide;
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            : 'white',
        height                : '100vh',
        width                 : '100vw',
        zIndex                : '100',
        position              : 'absolute',
        overflow              : 'scroll',
        textAlign             : 'center',
        paddingTop            : '100px',
        paddingBottom         : '100px',
      }
    };

    return (
      <div className="modal">
        <ReactModal 
          style={customStyles}
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
        >
          <div className="modalBody">
            <h2>{name}</h2>
            <img src={img} alt={`project ${name}`} style={{width: useFull ? "100vw" : "50vw"}}/>
            <p>{description}</p>
            <ul style={{listStyle: "none"}} className="list-inline item-details">
              <li>Frontend: <strong>{frontend}</strong></li>
              <li>Backend: <strong>{backend}</strong></li>
              <li>Link: <strong><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></strong></li>
              <li>Github: <strong><a href={github} target="_blank" rel="noopener noreferrer">{name}</a></strong></li>
            </ul>
            <button style={{height:'50px', position: "absolute", top: '60px', right: '0', background: 'transparent', color: 'black'}} onClick={toggleModal}>X</button>          
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default Modal
