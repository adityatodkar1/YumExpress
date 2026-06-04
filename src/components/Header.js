import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div>
        <div className="nav-items">
          <Link to='/'>Home</Link>
          <Link to='/about'>About us</Link>
          <Link to='/contact'>Contact us</Link>
          <Link to='/cart'>Cart</Link>
          {/* <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Contact Us</a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;