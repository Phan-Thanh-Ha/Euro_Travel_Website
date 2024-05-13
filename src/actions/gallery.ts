import { fetchMethod } from "./fetchFunctions";

//#region lấy dữ liệu đối tác
interface FetchGalleryData {
  Url: string;
  IsAll: boolean;
}
export const fetchGallery = async (data: FetchGalleryData) => {
  try {
    return await fetchMethod(data, "CMS_spGallery_List");
  } catch (error) {}
};
//#endregion
