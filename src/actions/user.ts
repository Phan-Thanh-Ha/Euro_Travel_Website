import { fetchMethod } from "@/actions/fetchFunctions";

//#region  lấy dữ liệu setting
interface FetchContract {
  CustomerId: number;
  GroupUserId: number;
}

export const fetchContract = async (data: FetchContract) => {
  try {
    return await fetchMethod(data, "CRM2_spContracts_List");
  } catch (error) {}
};
//#endregion

//#region  lấy dữ liệu bảo hành
interface FetchGuarantee {
  CustomerId: number;
  GroupUserId: number;
}

export const fetchGuarantee = async (data: FetchGuarantee) => {
  try {
    return await fetchMethod(data, "WMS_spGuaranteeProduct_List");
  } catch (error) {}
};
//#endregion

//#region  lấy dữ liệu khách hàng tiêu biểu
interface FetchTypicalCustomer {
  Id: number;
  GroupUserId: number;
}
export const fetchTypicalCustomer = async (data: FetchTypicalCustomer) => {
  try {
    return await fetchMethod(data, "Shop_spTypicalCustomer_List");
  } catch (error) {}
};
//#endregion

//#region cập nhật thông tin khách hàng
interface SaveCustomer {
  CustomerId: number;
  GroupUserId: number;
  CustomerName: string;
  Gender: number;
  DateOfBirth: string;
  Email: string;
  Phone: string;
  Creater: number;
}
export const saveCustomer = async (data: SaveCustomer) => {
  try {
    return await fetchMethod(data, "CRM2_spCustomerInfor_Save_Lite");
  } catch (error) {}
};
//#endregion

//#region  Login
interface LoginData {
  UserName: string;
  Password: string;
  GroupId: number;
}
export const login = async (data: LoginData) => {
  try {
    return await fetchMethod(data, "Shop_spCustomer_Login");
  } catch (error) {}
};
//#endregion

//#region  Register
interface RegisterData {
  CustomerId: number;
  CustomerName: string;
  CustomerPhone: string;
  CustomerEmail: string;
  Password: string;
  GroupId: number;
}
export const register = async (data: RegisterData) => {
  try {
    return await fetchMethod(data, "Shop_spCustomer_Save");
  } catch (error) {}
};
//#endregion
