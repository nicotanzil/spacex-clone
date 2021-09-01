import React from "react";

const UserContext = React.createContext({
  rockets: [],
  addRocket: (rocket) => {},
  removeRocket: (item) => {},
});

export default UserContext;
