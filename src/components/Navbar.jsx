import { StyledNavbar } from "./styled/Navbar.styled";
import { MdPersonOutline } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />

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

      <SearchBar />

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
