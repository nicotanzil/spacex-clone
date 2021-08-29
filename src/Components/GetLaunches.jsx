import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_LAUNCHES } from "../GraphQL/Queries";

const GetLaunches = (props) => {
  const { loading, error, data } = useQuery(LOAD_LAUNCHES);

  useEffect(() => {
    console.log(data);
  }, [data, error]);

  return <div>Get Launches</div>;
};

export default GetLaunches;
