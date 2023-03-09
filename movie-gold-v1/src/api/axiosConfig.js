import axios from 'axios';

export default axios.create({
    baseURL: 'https://86b7-2400-80c0-200e-d36-00-8.in.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});