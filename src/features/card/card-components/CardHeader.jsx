import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getSubscriberById } from "../../subscribers/subscribersSlice";
import "../style/card.scss";

export default function CardHeader({ id }) {
  const subscriber = useSelector((state) => getSubscriberById(state, id));

  return (
    subscriber.id && (
      <div className="card-header">
        <img
          className="avatar"
          src={subscriber.avatar}
          alt={`@${subscriber.name.replace(/\s/g, "")}`}
        ></img>
        <div className="subscriber-name">{subscriber.name}</div>
      </div>
    )
  );
}

CardHeader.propTypes = {
  id: PropTypes.string.isRequired,
};
