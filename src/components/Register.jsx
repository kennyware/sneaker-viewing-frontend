import { StyledRegister } from "./styled/Register.styled";
import loginImg from "../loginImg.jpg";

const Register = () => {
  return (
    <StyledRegister>
      <div className="register-group">
        <h1>FLY AMER1CA</h1>
        <img src={loginImg} alt="jordan shoes" />
      </div>
      <div className="register-group">
        <h1>Sign Up</h1>
        <form id="register-form">
          <div>
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </StyledRegister>
  );
};

export default Register;
