import React from "react";
import { Accordion } from "react-bootstrap";

const SearchLaunchesItem = (props) => {
  return (
    <div>
      <Accordion.Item eventKey={props.launch.id}>
        <Accordion.Header>{props.launch.mission_name}</Accordion.Header>
        <Accordion.Body>{props.launch.details}</Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default SearchLaunchesItem;
