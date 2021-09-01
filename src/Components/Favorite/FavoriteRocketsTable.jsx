import React from "react";
import styles from "./FavoriteRocketsTable.module.scss";
import { Table } from "react-bootstrap";
import FavoriteRocketsItem from "./FavoriteRocketsItem";

const FavoriteRocketsTable = (props) => {
  const removeFavoriteHandler = (id) => {
    props.onRemove(id);
  };

  return (
    <section className={styles.favorite_rockets_table}>
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
          {props.rockets.map((rocket) => (
            <FavoriteRocketsItem
              rocket={rocket}
              key={rocket.id}
              onRemove={removeFavoriteHandler}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default FavoriteRocketsTable;
