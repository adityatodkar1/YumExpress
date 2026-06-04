import { CDN_URL } from "../utils/constants";

const ResaturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src = { CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating}</h5>
      <h6>{sla.deliveryTime} Min</h6>
    </div>
  );
};

export default ResaturantCard;