import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RocketItem = (props) => {
  const click = () => {
    console.log("Click");
  };

  return (
    <tr onClick={click}>
      <td>{props.rocket.id}</td>
      <td>{props.rocket.name}</td>
      <td>{props.rocket.country}</td>
      <td>{props.rocket.first_flight}</td>
      <td>{props.rocket.success_rate_pct}%</td>
      <td>
        <Link to={`rockets/${props.rocket.id}`}>
          <Button>Details</Button>
        </Link>
      </td>
    </tr>
  );
};

export default RocketItem;
