import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { getSubscriberById } from "../../subscribers/subscribersSlice";
import variables from "../../../mixin.scss";
import "../style/modal.scss";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    inset: "50% auto auto 50%",
    border: `2px solid ${variables.primary}`,
    borderRadius: "14px",
    boxShadow: `0 10px 30px ${variables.shadowColor}`,
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    width: "75%",
  },
};

function formatDateTime(inputDate) {
  const date = new Date(inputDate);
  return `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

export default function ModalDetails({ id, modalIsOpen, closeModal }) {
  const subscriber = useSelector((state) => getSubscriberById(state, id));

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles}
    >
      <h1 className="modal-title">{subscriber.name}</h1>
      <div className="modal-body">
        <div className="modal-section">
          {subscriber.accounts.map((account) => (
            <div key={`account-${account.id}`}>
              <h3>Account id: {account.id}</h3>
              <p className="section-item">
                Created: {formatDateTime(account.created)}
              </p>
              <p className="section-item">Name: {account.name}</p>
              <p className="section-item">Balance: {account.balance}</p>
              <p className="section-item">
                Subscriber id: {account.subscriberId}
              </p>
            </div>
          ))}
        </div>
        <div className="modal-section">
          {subscriber.calls.map((call) => (
            <div key={`call-${call.id}`}>
              <h3>Call id: {call.id}</h3>
              <p className="section-item">
                Created: {formatDateTime(call.created)}
              </p>
              <p className="section-item">Name: {call.name}</p>
              <p className="section-item">Balance: {call.balance}</p>
              <p className="section-item">Subscriber id: {call.subscriberId}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

ModalDetails.propTypes = {
  id: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
