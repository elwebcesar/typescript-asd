import React from 'react';

import './modal.scss'

interface IModalProps {
  message: string;
  onClose: () => void;
  handleReload: () => void;
}

export default function Modal(props: IModalProps) {
  const { message, onClose, handleReload } = props;

  return (
    <div className="modal">
        <div className="modal__content">
          <button className='modal__close' onClick={onClose}>&times;</button>
          <div className="modal__message" dangerouslySetInnerHTML={{__html: props.message}}></div>
          {handleReload && <button onClick={handleReload}>inténtelo de nuevo</button>}
        </div>
    </div>
  );
}
