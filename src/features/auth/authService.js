import axios from "axios";

const API_URL = "/api/users/";

const register = async (data) => {
  const { data: res } = await axios.post(API_URL, data);

  if (res) {
    localStorage.setItem("user", JSON.stringify(res));
  }

  return res;
};

const login = async (data) => {
  const { data: res } = await axios.post(API_URL + "login", data);

  if (res) {
    localStorage.setItem("user", JSON.stringify(res));
  }

  return res;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
