import { StyledMobileMenu } from "./styled/MobileMenu.styled";
import { DarkOverlay } from "./styled/FilterMenu.styled";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";

const MobileMenu = ({ toggleMenu }) => {
  return (
    <>
      <DarkOverlay onClick={toggleMenu} />
      <StyledMobileMenu>
        <button className="close-btn" onClick={toggleMenu}>
          <CgClose />
        </button>
        <ul>
          <li>
            <Link to="/products/?gender=men" onClick={toggleMenu}>
              Mens
            </Link>
          </li>
          <li>
            <Link to="/products/?gender=women" onClick={toggleMenu}>
              Womens
            </Link>
          </li>
          <li>
            <Link
              to="/products/?gender=child,preschool,toddler"
              onClick={toggleMenu}
            >
              Kids
            </Link>
          </li>
          <li>
            <Link to="/products/?year=2022" onClick={toggleMenu}>
              New Releases
            </Link>
          </li>
        </ul>

        <div className="account">
          <Link to="/register" onClick={toggleMenu}>
            My Account
          </Link>
        </div>
      </StyledMobileMenu>
    </>
  );
};

export default MobileMenu;
