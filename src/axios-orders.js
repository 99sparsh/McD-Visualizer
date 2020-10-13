import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mcd-visualizer.firebaseio.com/'
})

export default instance;