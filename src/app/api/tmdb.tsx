import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "57b6976db66af5d40bf96ebd0120ce9c",
  },
});
