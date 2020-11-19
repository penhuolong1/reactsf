import axios from "axios";
import { message } from "antd";

const axiosConfig = {};
axiosConfig.ajax = function() {
  //正式接口基础配置
  const service = axios.create({
    baseURL: "/api",
    timeout: 1800000
  });
  //添加请求响应拦截器
  addInterceptors(service);
  return service;
};


const addInterceptors = service => {
  //添加请求拦截器
  interceptorsRequest(service);
  //添加响应拦截器
  interceptorsResponse(service);
};

//添加请求拦截器
const interceptorsRequest = service => {
  service.interceptors.request.use(
    config => {
      // 在发送请求之前做些什么
      console.log("添加请求拦截器", config);
      return config;
    },
    error => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
};
//添加响应拦截器
const interceptorsResponse = service => {
  service.interceptors.response.use(
    response => {
      // 对响应数据做点什么
      const res = response.data;
      console.log("添加响应拦截器", response);
      if (res.state !== 100) {
        //有错误提示
        message.error(res.message)
        //检测是否登录超时,301登录超时状态码
        if (res.state === 301) {
          //校测到超时，主动退出登录
        }
      }
      return res;
    },
    error => {
      //有错误提示
      message.error('服务器请求无响应！请联系后端处理。错误信息：')
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
};

export default axiosConfig;
