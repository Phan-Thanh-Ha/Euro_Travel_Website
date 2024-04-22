import { fetchMethod } from "./fetchFunctions";

//#region lấy dữ liệu đối tác
interface FetchGalleryData {
  tagUrl: string;
  Type: string;
}
export const fetchGallery = async (data: FetchGalleryData) => {
  try {
    return await fetchMethod(data, "CMS_spGalery_List");
  } catch (error) {}
};
//#endregion
