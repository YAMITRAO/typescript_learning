import axios from "axios";

// const baseURL = process.env.BASE_URL;
// const baseURL = import.meta.env.BASE_URL;
const baseURL = "https://crudcrud.com/api/aa0d6cec0e6a4f9fa22bf128b102d1b7";

export default axios.create({
  baseURL: baseURL,
});
