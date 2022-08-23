import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getSubscriberById } from "../../subscribers/subscribersSlice";
import "../style/card.scss";

export default function CardBody({ id }) {
  const subscriber = useSelector((state) => getSubscriberById(state, id));

  return (
    subscriber.id && (
      <div className="card-body">
        <div className="card-body-text">{`Card id: ${subscriber.id}`}</div>
        <div className="card-body-text">{`${subscriber.country}, ${subscriber.city}`}</div>
        <div className="card-body-text">{`${subscriber.address}`}</div>
      </div>
    )
  );
}

CardBody.propTypes = {
  id: PropTypes.string.isRequired,
};
