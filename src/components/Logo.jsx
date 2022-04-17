import { StyledLogo } from "./styled/Logo.styled";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
