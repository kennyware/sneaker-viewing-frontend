import { StyledLogin } from "./styled/Login.styled";
import loginImg from "../loginImg.jpg";

const Login = () => {
  return (
    <StyledLogin>
      <div className="login-group display">
        <h1>FLY AMER1CA</h1>
        <img src={loginImg} alt="jordan shoes" />
      </div>
      <div className="login-group">
        <h1>Login</h1>
        <form id="login-form">
          <div>
            <input type="text" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
