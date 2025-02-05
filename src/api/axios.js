import axios from 'axios';

//const baseURL = "https://jsonplaceholder.typicode.com";
const baseURL = "http://localhost:3300";

export default axios.create({
  baseURL: baseURL, // base URL of the API
  headers: {
    'Content-Type': 'application/json',
  },
});