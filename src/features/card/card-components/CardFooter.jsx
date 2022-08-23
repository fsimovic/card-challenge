import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { getSubscriberById } from "../../subscribers/subscribersSlice";
import variables from "../../../mixin.scss";
import "../style/modal.scss";
import "../style/card.scss";

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

export default function CardFooter({ id }) {
  const subscriber = useSelector((state) => getSubscriberById(state, id));
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="card-footer">
      <button className="card-footer-button" onClick={openModal}>
        Details
      </button>
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
              <>
                <h3>Account id: {account.id}</h3>
                <p key={account.created} className="section-item">
                  Created: {formatDateTime(account.created)}
                </p>
                <p key={account.name} className="section-item">
                  Name: {account.name}
                </p>
                <p key={account.balance} className="section-item">
                  Balance: {account.balance}
                </p>
                <p key={account.subscriberId} className="section-item">
                  Subscriber id: {account.subscriberId}
                </p>
              </>
            ))}
          </div>
          <div className="modal-section">
            {subscriber.calls.map((call) => (
              <>
                <h3>Call id: {call.id}</h3>
                <p key={call.created} className="section-item">
                  Created: {formatDateTime(call.created)}
                </p>
                <p key={call.name} className="section-item">
                  Name: {call.name}
                </p>
                <p key={call.balance} className="section-item">
                  Balance: {call.balance}
                </p>
                <p key={call.subscriberId} className="section-item">
                  Subscriber id: {call.subscriberId}
                </p>
              </>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

CardFooter.propTypes = {
  id: PropTypes.string.isRequired,
};
