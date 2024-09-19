import axios from "axios";

const apiurl = axios.create({
  baseURL: "https://indiastyleicon.com",
  // baseURL : "http://localhost:8800",
});

export default apiurl;
