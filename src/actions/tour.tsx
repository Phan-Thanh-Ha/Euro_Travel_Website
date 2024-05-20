import { fetchMethod } from "@/actions/fetchFunctions";
import { number } from "zod";
//#region lấy dữ liệu nhóm tour
interface FetchTourList {
  Id: number;
}
export const fetchTourList = async (data: FetchTourList) => {
  try {
    return await fetchMethod(data, "Trl_spTourManagement_List");
  } catch (error) { }
};
//#endregion

//#region lấy dữ liệu nhóm tour2
interface FetchTourGroup2 {
  Id: number;
  Slug: string;
}
export const fetchTourGroups = async (data: FetchTourGroup2) => {
  try {
    return await fetchMethod(data, "Trl_spTourGroups_List");
  } catch (error) { }
};
//#endregion

//#region lấy dữ liệu tour2
interface FetchTour {
  Id: number;
  Slug: string;
}
export const fetchTour = async (data: FetchTour) => {
  try {
    let res = await fetchMethod(data, "Trl_spTourManagement_Detail");
    return res;
  } catch (error) { }
};
//#endregion

// #region lấy dữ liệu tour mới
interface FetchTourListNew {
  Take: number;
}
export const fetchTourListNew = async (data: FetchTourListNew) => {
  try {
    return await fetchMethod(data, "CMS_spBlogs_Tour_List");
  } catch (error) { }
};
// #endregion

// #region lấy dữ liệu tour mới
interface infFilter {
  StartPlace: number;
  EndPlace: number;
  Day: string;
  PriceFrom: number;
  PriceTo: number;
  Date: string;
}
export const fetchFilterTour = async (data: infFilter) => {
  try {
    return await fetchMethod(data, "CMS_spTour_Filter");
  } catch (error) { }
};
// #endregion

// #region lấy dữ liệu tour mới
interface paramTour {
  BookingTourId: number;
  AdultNumber: number;
  ChildNumber: number;
  DateStart: string;
  Note: string;
  BookingOn: number;
}
export const registerTourNew = async (data: paramTour) => {
  try {
    return await fetchMethod(data, "CMS_spBookingTour_Save");
  } catch (error) { }
};
// #endregion

// #region lấy dữ liệu tour hot
interface FetchTourHot {
  Id: number;
  CountryId: number;
}

export const fetchListTourHot = async (data: FetchTourHot) => {
  try {
    return await fetchMethod(data, "Trl_spTourManagement_List");
  } catch (error) { }
}