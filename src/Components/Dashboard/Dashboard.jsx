import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import FetchRockets from "./FetchRockets";

const Dashboard = (props) => {
  const [rockets, setRockets] = useState([]);
  const [ships, setShips] = useState([]);
  const [launches, setLaunches] = useState([]);

  const updateStats = (rockets, ships, launches) => {
    console.log(rockets.length, ships.length, launches.length);
    setRockets(rockets);
    setShips(ships);
    setLaunches(launches);
  };

  return (
    <div className={styles.dashboard}>
      <section className={styles.section_1}>
        <div className={styles.quote}>
          "You want to wake up in the morning and think the future is going to
          be great - and that’s what being a spacefaring civilization is all
          about. It’s about believing in the future and thinking that the future
          will be better than the past. And I can’t think of anything more
          exciting than going out there and being among the stars.""
        </div>
        <div className={styles.quote_source}>-Elon Musk</div>
      </section>
      <section className={styles.section_2}>
        <div className={styles.stats_container}>
          <div className={styles.stats_number}>{rockets.length}</div>
          <div className={styles.stats_description}>Rockets</div>
        </div>
        <div className={styles.stats_container}>
          <div className={styles.stats_number}>{ships.length}</div>
          <div className={styles.stats_description}>Ships</div>
        </div>
        <div className={styles.stats_container}>
          <div className={styles.stats_number}>{launches.length}</div>
          <div className={styles.stats_description}>Launches</div>
        </div>
      </section>
      <section className={styles.section_3}>
        <FetchRockets updateStats={updateStats} />
      </section>
    </div>
  );
};

export default Dashboard;
