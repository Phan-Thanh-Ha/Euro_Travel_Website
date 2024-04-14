import { fetchMethod } from "@/actions/fetchFunctions";
//#region lấy dữ liệu nhóm tour
interface FetchTourGroup {
  Id: number;
}
export const fetchTourGroup = async (data: FetchTourGroup) => {
  try {
    return await fetchMethod(data, "Trl_spTourManagement_List");
  } catch (error) {}
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
  } catch (error) {}
};
//#endregion

//#region lấy dữ liệu tour2
interface FetchTour {
  Id: number;
  Slug: string;
}
export const fetchTour = async (data: FetchTour) => {
  try {
    return await fetchMethod(data, "Trl_spTourManagement_Detail");
  } catch (error) {}
};
//#endregion
