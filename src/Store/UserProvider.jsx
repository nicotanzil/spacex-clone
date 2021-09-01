import React, { useReducer } from "react";
import UserContext from "./user-context";

const defaultUserState = {
  rockets: [
    { id: "falcon1", name: "Falcon 1", country: "United States" },
    { id: "falcon9", name: "Falcon 9", country: "Canada" },
  ],
};

const userReducer = (state, action) => {
  if (action.type === "ADD_ROCKET") {
    // add logic
    const rocketIndex = state.rockets.findIndex(
      (rocket) => rocket.id === action.rocket.id
    );

    let updatedRockets = state.rockets;

    if (rocketIndex === -1) {
      updatedRockets.push(action.rocket);
    } else {
      updatedRockets[rocketIndex] = action.rocket;
    }
    return {
      rockets: updatedRockets,
    };
  } else if (action.type === "REMOVE_ROCKET") {
    // remove logic
    const rocketIndex = state.rockets.findIndex(
      (rocket) => rocket.id === action.id
    );

    let updatedRockets = state.rockets;

    if (rocketIndex !== -1) {
      updatedRockets.splice(rocketIndex, 1);
    }

    return {
      rockets: updatedRockets,
    };
  }
  return defaultUserState;
};

const UserProvider = (props) => {
  const [userState, dispatchUser] = useReducer(userReducer, defaultUserState);

  const addRocketToUserHandler = (rocket) => {
    dispatchUser({ type: "ADD_ROCKET", rocket });
  };

  const removeRocketFromUserHandler = (id) => {
    dispatchUser({ type: "REMOVE_ROCKET", id });
  };

  const userContext = {
    rockets: userState.rockets,
    addRocket: addRocketToUserHandler,
    removeRocket: removeRocketFromUserHandler,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
