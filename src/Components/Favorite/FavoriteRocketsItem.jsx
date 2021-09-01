import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FavoriteRocketsItem = (props) => {
  const removeFavoriteHandler = () => {
    props.onRemove(props.rocket.id);
  };

  return (
    <tr>
      <td>{props.rocket.id}</td>
      <td>{props.rocket.name}</td>
      <td>{props.rocket.country}</td>
      <td>{props.rocket.first_flight}</td>
      <td>{props.rocket.success_rate_pct}%</td>
      <td>
        <Button onClick={removeFavoriteHandler}>Remove</Button>
      </td>
    </tr>
  );
};

export default FavoriteRocketsItem;
