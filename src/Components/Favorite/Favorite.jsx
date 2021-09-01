import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../Store/user-context";
import styles from "./Favorite.module.scss";
import FavoriteRocketsTable from "./FavoriteRocketsTable";

const Favorite = (props) => {
  const userCtx = useContext(UserContext);
  const { rockets } = userCtx;
  const [favRockets, setFavRockets] = useState(rockets);

  console.log("Favorite");
  console.log(favRockets);
  // console.log(rockets.length);
  // const hasFavorite = rockets.length > 0;

  const removeFavoriteHandler = (id) => {
    userCtx.removeRocket(id);
    setFavRockets(userCtx.rockets);
  };

  if (favRockets.length > 0) {
    return (
      <div className={styles.favorite}>
        <div className={styles.title}>Your Favorites</div>
        <div className={styles.favorites}>
          <FavoriteRocketsTable
            rockets={favRockets}
            onRemove={removeFavoriteHandler}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.favorite}>
      <div className={styles.empty_table}>Such emptiness... :(</div>
    </div>
  );
};

export default Favorite;
