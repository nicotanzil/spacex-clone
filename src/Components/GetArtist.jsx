import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_ARTIST } from "../GraphQL/Queries";

const GetArtist = (props) => {
  const { loading, error, data } = useQuery(LOAD_ARTIST, {
    variables: { name: "Ari" },
  });

  useEffect(() => {
    console.log(data);
  }, [data, error]);

  return <div>Get Artist</div>;
};

export default GetArtist;
