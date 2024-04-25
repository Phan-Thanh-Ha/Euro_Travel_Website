import { fetchMethod } from "@/actions/fetchFunctions";

//#region lấy dữ liệu cẩm nang du lịch
interface FetchBlogData {
  Take: number;
  Url: string;
}
export const fetchHandBook = async (data: FetchBlogData) => {
  try {
    return await fetchMethod(data, "CMS_spBlogs_Handbook_List");
  } catch (error) { }
};
// #endregion

//#region lấy dữ liệu bài viết mới

interface FetchNewPage {
  Take: number;
}
export const fetchNewPage = async (data: FetchNewPage) => {
  try {
    return await fetchMethod(data, "CMS_spBlogs_NewPage_List");
  } catch (error) { }
};
// #endregion

// #region lấy dữ liệu content

interface FetchContent {
  Url: string;
}
export const fetchContent = async (data: FetchContent) => {
  try {
    return await fetchMethod(data, "CMS_spBlogs_Content");
  } catch (error) { }
};
// #endregion
