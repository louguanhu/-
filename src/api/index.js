import request from './request'
import mockRequest from "@/api/mockAjax";

//请求地址：/api/user/passport/login   GET
export const reqCategoryList = ()=>request('/product/getBaseCategoryList')

//获取banner
export  const  reGetBannerList =()=>mockRequest('/banner')
export  const  reGetFloorList =()=>mockRequest('/floor')

//当前这个接口，给服务器传递参数params,至少是一个空对象（没有传则会报错）
export const reGetSearchInfo =(params)=>request({url:'/list',method:'post',data:params})