import { fetchMethod } from "@/actions/fetchFunctions";

//#region Lấy dữ liệu content từ tour
interface Fetch_Travel_Content {
    Url: string;
}
export const Fetch_Travel_Content = async (data: Fetch_Travel_Content) => {
    try {
        return await fetchMethod(data, "CMS_spCategoryInfor_Content");
    } catch (error) { }
};
// #endregion