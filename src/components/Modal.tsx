import React from 'react';
import { IModalState, IModalProps } from '../@types/Modal';
import { ICountry } from '../@types/Countries';

class Modal extends React.Component<IModalProps, IModalState> {
  render() {
    const { country }: ICountry = this.props;
    return (
      <div className="w-screen h-screen fixed bg-slate-600/80 z-10 top-0 left-0 flex items-center justify-center">
        <div className="w-8/12 h-4/6 bg-slate-600 rounded-lg p-6 ">
          <h3 className="font-bold text-lg">
            {country.translations.fra.official}
          </h3>
          <p className="py-4">Nom :</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn"
              onClick={() => this.props.handleOpenModal(this.props.country)}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
