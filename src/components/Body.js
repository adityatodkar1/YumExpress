import ResaturantCard from "./Restaurant";
import { resList } from "../utils/mockData.js";
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(  "https://corsproxy.io/?url=" +
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  };

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search restaurants........."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const filteredList = listofRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="flter-btn"
          onClick={() => {
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restarnats
        </button>
      </div>

      <div className="res-container">
        {filterRestaurants.map((restaurant) => {
          return (
            // <ResaturantCard key={restaurant.info.id} resData={restaurant} />
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <ResaturantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
