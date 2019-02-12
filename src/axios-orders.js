import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-burger-builder-5800f.firebaseio.com/'
});

export default instance;