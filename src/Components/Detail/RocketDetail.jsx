import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ROCKET } from "../../GraphQL/Queries";
import UserContext from "../../Store/user-context";
import styles from "./RocketDetail.module.scss";

const RocketDetail = (props) => {
  const { id } = useParams();
  const [rocket, setRocket] = useState({});
  const userCtx = useContext(UserContext);
  const [favoriteRocket, setFavoriteRocket] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  let { loading, error, data } = useQuery(GET_ROCKET, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setRocket(data.rocket);
      const rocketIndex = userCtx.rockets.findIndex(
        (r) => r.id === data.rocket.id
      );
      setIsFavorite(rocketIndex !== -1);
      if (rocketIndex !== -1) {
        const { favRocket } = userCtx.rockets[rocketIndex];
        console.log(favRocket);
      }
    }
  }, [data]);

  console.log("RocketDetail");
  console.log(userCtx.rockets.length);
  const onFavoriteHandler = () => {
    const isFavAlready =
      userCtx.rockets.findIndex((r) => r.id === rocket.id) !== -1;
    isFavAlready ? userCtx.removeRocket(id) : userCtx.addRocket({ ...rocket });
    setIsFavorite(!isFavAlready);
  };

  if (Object.entries(rocket).length !== 0) {
    return (
      <section className={styles.rocket_detail}>
        <div className={styles.upper_section}>
          <div className={styles.upper_title}>
            <div className={styles.name}>{rocket.name}</div>
            <i
              className={`bx ${isFavorite ? "bxs" : "bx"}-star`}
              onClick={onFavoriteHandler}
            />
          </div>
          <div className={styles.upper_detail}>
            <div className={styles.country}>{rocket.country}</div>
            <div
              className={
                data
                  ? rocket.active
                    ? styles.status_active
                    : styles.status_not_active
                  : ""
              }
            >
              {data ? (rocket.active ? "Active" : "Not Active") : ""}
            </div>
          </div>

          <div className={styles.description}>{rocket.description}</div>
        </div>
        <div className={styles.middle_section}>
          <div className={styles.tile}>
            <div className={styles.tile_title}>developed by</div>
            <div className={styles.tile_content}>{rocket.company}</div>
          </div>
          <div className={styles.tile}>
            <div className={styles.tile_title}>cost per launch</div>
            <div className={styles.tile_content}>${rocket.cost_per_launch}</div>
          </div>
          <div className={styles.tile}>
            <div className={styles.tile_title}>first flight</div>
            <div className={styles.tile_content}>{rocket.first_flight}</div>
          </div>
          <div className={styles.tile}>
            <div className={styles.tile_detail}>
              <div className={styles.tile_detail_title}>diameter</div>
              <div className={styles.tile_detail_content}>
                {rocket.diameter.meters}m
              </div>
            </div>
            <div className={styles.tile_detail}>
              <div className={styles.tile_detail_title}>height</div>
              <div className={styles.tile_detail_content}>
                {rocket.height.meters}m
              </div>
            </div>
            <div className={styles.tile_detail}>
              <div className={styles.tile_detail_title}>mass</div>
              <div className={styles.tile_detail_content}>
                {rocket.mass.kg}kg
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return <div>Loading</div>;
};

export default RocketDetail;
