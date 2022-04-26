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

const getSavedItems = async (token) => {
  console.log("test 2");
  const { data: res } = await axios.get(API_URL + "saved", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res;
};

const saveItem = async (itemId, token) => {
  const { data: res } = await axios.post(
    API_URL + "savedItems",
    { itemId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return res;
};

const authService = {
  register,
  login,
  logout,
  getSavedItems,
  saveItem,
};

export default authService;
