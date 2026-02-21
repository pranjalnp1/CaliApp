import axios from 'axios';

// create an instance of axios with a base URL
const api = axios.create({
    baseURL: "http://localhost:8000",
});
// export the axios instance 
export default api; 