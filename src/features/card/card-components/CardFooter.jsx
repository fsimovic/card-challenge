import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalDetails from "./ModalDetails";
import "../style/card.scss";

export default function CardFooter({ id }) {
  const [modalIsOpen, setIsOpen] = useState(false);

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
      <ModalDetails id={id} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}

CardFooter.propTypes = {
  id: PropTypes.string.isRequired,
};
