import { fetchMethod } from "@/actions/fetchFunctions";

//#region  lấy dữ liệu thuong hieu
interface FetchBrandsData {
  BrandId: number;
  Take: number;
  TextSearch: string;
}

export const fetchBrands = async (data: FetchBrandsData) => {
  try {
    return await fetchMethod(data, "Shop_spWeb_Brand_List");
  } catch (error) {}
};
//#endregion

//#region lưu order
interface SaveOrderData {
  OrderId: number;
  OrderCode: string;
  CustomerPhone: string;
  CustomerName: string;
  CustomerId: number;
  OrderStatusId: number;
  OrderStatusName: string;
  Notes: string;
  TotalQuatity: number;
  TotalPriceProduct: number;
  VoucherId: number;
  VoucherCode: string;
  VoucherPrice: number;
  Discount: number;
  SurchargePrice: number;
  TotalAmount: number;
  CityId: number;
  DistrictId: number;
  WardId: number;
  CityName: string;
  DistrictName: string;
  WardName: string;
  AddressDetail: string;
  Address: string;
  ProductList: any[]; // replace any[] with the actual type of the products
  ShippingCost: number;
  Email: string;
  TypePayment: string;
}
export const saveOrder = async (data: SaveOrderData) => {
  try {
    return await fetchMethod(data, "Shop_spWeb_CustomerOrder_Save");
  } catch (error) {}
};

//#endregion

//#region lấy dữ liệu sản phẩm
interface FetchProductsData {
  BrandId: number;
  TextSearch: string;
  Url: string;
  IsNew: number;
}
export const fetchProduct = async (data: FetchProductsData) => {
  try {
    return await fetchMethod(data, "Shop_spProducts_List");
  } catch (error) {}
};
//#endregion

//#region lấy dữ liệu nhóm sản phẩm
interface FetchProductGroupData {
  Id: number;
}
export const fetchProductGroup = async (data: FetchProductGroupData) => {
  try {
    return await fetchMethod(data, "Shop_spProductGroup_List");
  } catch (error) {}
};
//#endregion

//#region lấy dữ liệu sản phẩm theo nhóm sản phẩm - sản phẩm đề xuất

interface FetchProductSuggestData {
  ProductId: number;
}
export const fetchProductSuggest = async (data: FetchProductSuggestData) => {
  try {
    return await fetchMethod(data, "Shop_spProductSuggest_List");
  } catch (error) {}
};
//#endregion
