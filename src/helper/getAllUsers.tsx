import axiosInstance from "../api/axiosInstance";

const getAllUsers = () => {
  axiosInstance("/")
    .then((res) => {
      console.log("res data", res.data);
      return res.data;
    })
    .catch((err) => console.log("Error", err));
};

export default getAllUsers;
