import { StyledNavbar } from "./styled/Navbar.styled";
import { MdPersonOutline, MdMenu } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <>
      <StyledNavbar>
        <button
          className="menu-btn"
          onClick={() => setToggleMobileNav(!toggleMobileNav)}
        >
          <MdMenu />
        </button>
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

        <div className="nav-right">
          <SearchBar />

          <div className="action-icons">
            <Link to="/bag" className="bag-btn">
              <button>
                <FiShoppingBag />
              </button>
            </Link>
            <Link to="/login" className="account-btn">
              <button>
                <MdPersonOutline />
              </button>
            </Link>
          </div>
        </div>
      </StyledNavbar>
      {toggleMobileNav && (
        <MobileMenu toggleMenu={() => setToggleMobileNav(!toggleMobileNav)} />
      )}
    </>
  );
};

export default Navbar;
