import { fetchMethod } from "./fetchFunctions";

//#region lấy dữ liệu đối tác
interface FetchPartnerData {
    GroupId: number;
  }
  export const fetchPartner = async (data: FetchPartnerData) => {
    try {
      return await fetchMethod(data, "Shop_spBrand_List");
    } catch (error) {}
  };
  //#endregion