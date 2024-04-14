import { fetchMethod } from "@/actions/fetchFunctions";

//#region  lấy dữ liệu setting
interface FetchSettingData {
  KeySetting: string;
}
export const fetchSetting = async (data: FetchSettingData) => {
  try {
    return await fetchMethod(data, "Trl_spWeb_Setting_List");
  } catch (error) {}
};
//#endregion

//#region  lấy dữ liệu menu
interface FetchMenuData {
  MenuName: string;
}
export const fetchMenu = async (data: FetchMenuData) => {
  try {
    const res = await fetchMethod(data, "CMS_spMenu_List");
    return createNestedArray(res);
  } catch (error) {}
};
//#endregion

//#region  lấy dữ liệu banner
interface FetchBannerData {
  KeySelect: string;
}
export const fetchBanner = async (data: FetchBannerData) => {
  try {
    return await fetchMethod(data, "CMS_spBanner_List");
  } catch (error) {}
};

function createNestedArray(arr: any[]) {
  const map = new Map();
  const result = [];
  for (const item of arr) {
    if (!map.has(item.Id)) {
      const key = item.MenuUrl.substring(1);
      map.set(item.Id, {
        key: key,
        MenuId: item.Id,
        children: [],
        MenuImage: item.MenuImage,
        MenuName: item.MenuName,
        // MenuName: lang === "vi" ? item.MenuName : item.MenuNameEn,
      });
    }
  }
  for (const item of arr) {
    if (item.ParentId === undefined) {
      result.push(map.get(item.Id));
    } else {
      const parentItem = map.get(item.ParentId);
      if (parentItem) {
        parentItem.children.push(map.get(item.Id));
      }
    }
  }
  const filteredArr = result.map((item) => removeEmptyChildren(item));
  return filteredArr;
}

interface Node {
  children?: Node[];
  [key: string]: any;
}

function removeEmptyChildren(node: Node): Node {
  if (node.children && node.children.length === 0) {
    delete node.children;
  } else if (node.children && node.children.length > 0) {
    node.children = node.children.map((childNode: Node) =>
      removeEmptyChildren(childNode)
    );
  }
  return node;
}
//#endregion

//#region  lấy dữ liệu blog
interface FetchBlogData {
  Take: number;
  Page: number;
  Url: string;
  // TextSearch: string;
  // NewsId: number;
  UrlParent: string;
}
export const fetchBlogs = async (data: FetchBlogData) => {
  try {
    return await fetchMethod(data, "Shop_spWeb_News_List");
  } catch (error) {}
};

//#endregion
