/**
 * @name: index
 * @author: chuanchuan
 * @date: 2022-04-01 11:37
 * @description：index
 * @update: 2022-04-01 11:37
 */

import Axios from 'axios';
import baseURL, { URLS } from '@/api/URLS';

const appkey = 'wjchc_1647762745134';

const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});

request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(
  URLS.getSide,
  { params: { type } },
);

export default {
  getSideList,
};
