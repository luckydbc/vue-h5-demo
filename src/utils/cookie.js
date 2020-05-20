/*
 * @Author: your name
 * @Date: 2020-02-05 16:19:06
 * @LastEditTime : 2020-02-12 10:24:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-school-official/src/utils/cookie.js
 */
import Cookies from "js-cookie";
import config from "@/config";

const PROMOTION_OPEN_ID = "PROMOTION_OPEN_ID";
export const getOepnId = () => Cookies.get(PROMOTION_OPEN_ID);
export const setOpenId = openId => Cookies.set(PROMOTION_OPEN_ID, openId);

// 认证信息包括 token && 需要在发请求时带在 header 上
const TOKEN_KEY = config.TOKEN_KEY;
// 登录后的用户信息
const USER_KEY = config.USER_KEY;

const EXPIRES = config.TOKEN_EXPIRES;

const SCHOOL_KEY = config.SCHOOL_KEY;

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(value) {
  return Cookies.set(TOKEN_KEY, value, { expires: EXPIRES });
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY);
}

export function setUser(value) {
  return Cookies.set(USER_KEY, value, { expires: EXPIRES });
}

export function getUser() {
  return JSON.parse(Cookies.get(USER_KEY));
}

export function removeUser() {
  return Cookies.remove(USER_KEY);
}

export function setSchool(value) {
  return Cookies.set(SCHOOL_KEY, value, { expires: EXPIRES });
}

export function getSchool() {
  return Cookies.get(SCHOOL_KEY);
}

export function removeSchool() {
  return Cookies.remove(SCHOOL_KEY);
}

export function loggedIn() {
  return !!Cookies.get(TOKEN_KEY);
}

export default {
  getToken,
  setToken,
  setUser,
  getUser,
  removeToken,
  removeUser,
  loggedIn
};
