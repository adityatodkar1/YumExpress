import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";
import UseRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const resMenu = UseRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info || [];

  const { itemCards, imageId, description, price } =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || [];

  if (resMenu === null) {
    return <Shimmer />;
  }

  return (
    <div className="restaurantMenu-card">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>
      <h2>MENU : </h2>

      <ul>
        {itemCards?.map((item) => (
          <li className="menu-item" key={item.card.info.id}>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="food-image"
            />

            <div className="menu-text">
              <h3 className="item-name">{item.card.info.name}</h3>

              <p className="item-price">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </p>
            </div>

            <p className="item-desc">{item.card.info.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
