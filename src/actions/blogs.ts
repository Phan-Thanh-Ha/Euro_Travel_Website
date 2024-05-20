import { fetchMethod } from "@/actions/fetchFunctions";

//#region lấy dữ liệu cẩm nang du lịch
interface FetchBlogData {
  Take: number;
  Url: string;
  IsHot: boolean;
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


// #region lấy dữ liệu địa danh nỗi bật theo danh mục
interface FetchPlaceHot {
  Url: string;
}
export const FetchPlaceHot = async (data: FetchPlaceHot) => {
  try {
    return await fetchMethod(data, "CMS_spSiteManagement_List");
  } catch (error) { }
};
// #endregion


// #region lấy dữ liệu tin tức du lịch theo danh mục
interface FetchNews {
  Url: string;
}
export const FetchNews = async (data: FetchNews) => {
  try {
    return await fetchMethod(data, "CMS_spBlogs_Handbook_List_By_Tour");
  } catch (error) { }
};



