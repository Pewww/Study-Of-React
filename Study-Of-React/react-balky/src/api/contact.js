import axios from 'axios';
import constant from './constant';

export default {
  getServerData () {
    return axios.get(constant.BASE_URL);
  }
}