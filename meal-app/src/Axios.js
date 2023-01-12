import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080';
axios.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("token");
        const auth = token ? `Bearer ${token}` : '';
        config.headers.common["Authorization"] = auth;
        return config;
    },
    (error) => Promise.reject(error)
);

export default axios;