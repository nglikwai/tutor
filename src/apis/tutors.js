import axios from 'axios';

export default axios.create({
    // baseURL: 'https://www.dse00.com/',
    baseURL: 'http://localhost:4000/' || 'https://www.dse00.com/',

})