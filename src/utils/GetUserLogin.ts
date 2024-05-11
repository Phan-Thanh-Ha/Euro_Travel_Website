import { DecodeObject } from "./DecodeString";

export const getUserLogin = () => {
  try {
    const storage = window.localStorage.getItem('userLogin');
    const data = DecodeObject(storage || "");
    return data;
  } catch (error) { return {} }
}