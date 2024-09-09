import axios from "axios";

const baseURL = "https://crudcrud.com/api/be0e285c4c994ee1bd22cd9113bc9a91";

export default axios.create({
  baseURL: baseURL,
});
