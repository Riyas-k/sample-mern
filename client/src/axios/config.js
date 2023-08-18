import axios from "axios";

const  data = axios.create({
    baseURL:"http://localhost:3000"
});

export default data