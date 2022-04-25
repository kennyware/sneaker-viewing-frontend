import { StyledRegister } from "./styled/Register.styled";
import loginImg from "../loginImg.jpg";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, reset } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, user, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (user || isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, message, isSuccess, user, dispatch, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !password2) {
      console.log("Please fill in all fields.");
      return null;
    }

    if (password !== password2) {
      console.log("Passwords do not match.");
      return null;
    }

    dispatch(registerUser({ email, password }));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) return <Loader />;

  return (
    <StyledRegister>
      <div className="register-group display">
        <h1>FLY AMER1CA</h1>
        <img src={loginImg} alt="jordan shoes" />
      </div>
      <div className="register-group">
        <h1>Sign Up</h1>
        <form id="register-form" onSubmit={onSubmit}>
          <div>
            <input
              type="email"
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
          <div>
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={onChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </StyledRegister>
  );
};

export default Register;
