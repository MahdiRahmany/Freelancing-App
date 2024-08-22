import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.delete,
  patch: app.patch,
};

export default http;
