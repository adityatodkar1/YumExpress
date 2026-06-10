import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router";

const useRestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://corsproxy.io/?url=" +
    //   "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=" + resId
    // );

    const data = await fetch(
      "https://demomenu.onrender.com/api/menu/" + resId );

    const json = await data.json();
    setResMenu(json.data);
    console.log(resMenu);
  };

  return resMenu;
};

export default useRestaurantMenu;

// http://swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=
