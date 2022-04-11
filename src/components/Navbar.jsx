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
          <Link to="/products">Mens</Link>
        </li>
        <li>
          <Link to="/products">Womens</Link>
        </li>
        <li>
          <Link to="/products">Kids</Link>
        </li>
        <li>
          <Link to="/products">New Releases</Link>
        </li>
      </ul>

      <div className="search-bar">
        <button className="search-btn">
          <MdSearch />
        </button>
        <input type="text" placeholder="Search" />
      </div>

      <div className="action-icons">
        <button className="bag-btn">
          <FiShoppingBag />
        </button>
        <button className="account-btn">
          <MdPersonOutline />
        </button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
