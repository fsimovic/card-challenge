import React from "react";
import PropTypes from "prop-types";
import CardHeader from "./card-components/CardHeader";
import CardBody from "./card-components/CardBody";
import CardFooter from "./card-components/CardFooter";
import "./style/card.scss";

export default function Card({ id }) {
  return (
    <div className="card-container">
      <CardHeader id={id} />
      <CardBody id={id} />
      <CardFooter id={id} />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
};
