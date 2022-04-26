import { StyledLogin } from "./styled/Login.styled";
import loginImg from "../loginImg.jpg";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { isLoading, isSuccess, message, isError, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (user || isSuccess) {
      navigate("/");
    }

    return () => {
      dispatch(reset());
    };
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log("Please fill in all fields.");
      return null;
    }

    dispatch(login({ email, password }));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) return <Loader />;

  return (
    <StyledLogin>
      <div className="login-group display">
        <h1>FLY AMER1CA</h1>
        <img src={loginImg} alt="jordan shoes" />
      </div>
      <div className="login-group">
        <h1>Login</h1>
        <form id="login-form" onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
