import React from 'react';
import { IModalState, IModalProps } from '../@types/Modal';

class Modal extends React.Component<IModalProps, IModalState> {
  render() {
    return (
      <div className="modal">
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    );
  }
}

export default Modal;