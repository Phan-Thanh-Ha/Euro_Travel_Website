import { DecodeObject } from "./DecodeString";

export const getUserLogin = () => {
  let user = {};
  try {
    const userEmp = DecodeObject(window.localStorage.getItem("userLogin") || "");
    const userGg = DecodeObject(window.localStorage.getItem("userLoginGg") || "");
    if (userEmp) {
      user = userEmp;
      return user;
    }
    if (userGg) {
      user = userGg;
      return user;
    }
    if (!userEmp && !userGg) {
      return user;
    }
  } catch (error) { }
};