import axios from '@/libs/api.request';
import config from '@/config';
// let gateway = config.gateway;
// 获取数据字典
export const getTableData = (params) => {
 console.log(params);
 return axios.request({
  url: '/api/lc/SYSDICSELECTLIST',
  data: params,
  method: 'post'
 });
};
// 获取用户信息
export const getUserInfo = (params) => {
 return axios.request({
  url: '/api/lc/SELECTLISTUSER',
  data: params,
  method: 'post'
 });
};
// 新增||删除||修改用户信息
export const OptUser = (params) => {
 let api = '';
 console.log(params);
 if (params) {
  if (params.flag === 'delete') {
   api = '/api/lc/DELETETUSER';
  } else if (params.flag === 'update') {
   api = '/api/lc/UPDATEUSER';
  } else {
   api = '/api/lc/INSERTUSER';
  }
 }
 return axios.request({
  url: api,
  data: params,
  method: 'post'
 });
};
