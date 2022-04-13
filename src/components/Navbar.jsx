import { StyledNavbar } from "./styled/Navbar.styled";
import logo from "../logo.svg";
import { MdPersonOutline, MdSearch } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/products/?gender=men">Mens</Link>
        </li>
        <li>
          <Link to="/products/?gender=women">Womens</Link>
        </li>
        <li>
          <Link to="/products/?gender=child,preschool,toddler">Kids</Link>
        </li>
        <li>
          <Link to="/products/?year=2022">New Releases</Link>
        </li>
      </ul>

      <div className="search-bar">
        <button className="search-btn">
          <MdSearch />
        </button>
        <input type="text" placeholder="Search" />
      </div>

      <div className="action-icons">
        <Link to="/bag">
          <button className="bag-btn">
            <FiShoppingBag />
          </button>
        </Link>
        <Link to="/login">
          <button className="account-btn">
            <MdPersonOutline />
          </button>
        </Link>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
