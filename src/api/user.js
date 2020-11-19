import axiosConfig from "@/utils/http.js";
// 创建正式用例接口基础配置
const service = axiosConfig.ajax();

// 案件列表接口
export function getMByCId(params) {
  return service({
    url: "/court/mediateter/getMByCId.jhtml",
    method: "GET",
    params
  });
}

// 获取用户详情
export function getUserInfo(params) {
  return service({
    url: "/main/getUserInfo.jhtml",
    method: "GET",
    params
  });
}