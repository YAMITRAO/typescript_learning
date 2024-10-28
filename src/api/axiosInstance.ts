import axios from "axios";

// const baseURL = process.env.BASE_URL;
// const baseURL = import.meta.env.BASE_URL;
const baseURL = "http://localhost:3010/";

export default axios.create({
  baseURL: baseURL,
});
