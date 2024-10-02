import axios from "axios";

const apiurl = axios.create({
 // baseURL: "https://indiastyleicon.com",
   // baseURL : "http://localhost:8800",
  baseURL : "https://idsserver-app-tk64n.ondigitalocean.app",
   
});

export default apiurl;
