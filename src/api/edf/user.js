import request from "@/utils/request";
import { encryptedData } from "@/utils/encrypt";
import { loginRSA } from "@/config/settings";

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data);
  }
  return request({
    url: "/edf/user/login",
    method: "post",
    data,
  });
}

export function getInfo(accessToken) {
  return request({
    url: "/userInfo",
    method: "post",
    data: {
      accessToken,
    },
  });
}

export function existsMobile() {
  return request({
    url: "/edf/user/existsMobile",
    method: "post",
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}
export function register() {
  return request({
    url: "/register",
    method: "post",
  });
}
