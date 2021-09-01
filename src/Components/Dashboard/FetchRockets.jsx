import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FETCH_DASHBOARD_DATA } from "../../GraphQL/Queries";
import RocketItem from "./RocketItem";
import styles from "./FetchRockets.module.scss";
import { Route, Switch } from "react-router-dom";
import RocketDetail from "../Detail/RocketDetail";

const FetchRockets = (props) => {
  const [rockets, setRockets] = useState([]);

  const { loading, error, data } = useQuery(FETCH_DASHBOARD_DATA);

  useEffect(() => {
    if (data) {
      console.log(data);
      setRockets(data.rockets);
      props.updateStats(data.rockets, data.ships, data.launches);
    }
  }, [data, error]);

  return (
    <section className={styles.fetch_rockets}>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>First Flight</th>
            <th>Success Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rockets.map((rocket) => (
            <RocketItem rocket={rocket} key={rocket.id} />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default FetchRockets;
