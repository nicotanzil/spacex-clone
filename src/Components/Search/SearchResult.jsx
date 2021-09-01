import { useQuery } from "@apollo/client";
import styles from "./SearchResult.module.scss";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { FIND_LAUNCHES_BY_MISSION } from "../../GraphQL/Queries";
import SearchLaunchesItem from "../Launches/SearchLaunchesItem";
import { div } from "prelude-ls";

const SearchResult = (props) => {
  const [launches, setLaunches] = useState([]);

  const { loading, error, data } = useQuery(FIND_LAUNCHES_BY_MISSION, {
    variables: { mission_name: props.keyword },
  });

  useEffect(() => {
    if (data && props.keyword.length > 0) {
      console.log(data.launches);
      setLaunches(data.launches);
    } else {
      setLaunches([]);
    }
  }, [data, error]);

  return (
    <div className={styles.search_result}>
      {launches.length > 0 ? (
        <Accordion>
          {launches.map((launch) => (
            <SearchLaunchesItem launch={launch} key={launch.id} />
          ))}
        </Accordion>
      ) : (
        <div className={styles.empty_query}>
          no results for "{props.keyword}"
        </div>
      )}
    </div>
  );
};

export default SearchResult;
