import {

ADD_BRAND,
ADD_INFORMATION,
ADD_PRODUCT,
REMOVE_PRODUCT,
RESET_CART,
SET_PRODUCT,
ADD_SETTING,
SET_MENU,
SET_BLOG,
SET_GROUP,
SEARCH_HISTORY,
SET_LANG,
SET_SLIDE,
} from "./contants";

interface Action {
type: string;
payload: any;
}

export const AddProduct = (payload: any): Action => ({
type: ADD_PRODUCT,
payload,
});

export const removeProduct = (payload: any): Action => ({
type: REMOVE_PRODUCT,
payload,
});

export const resetCart = (payload: any): Action => ({
type: RESET_CART,
payload,
});

export const addInformation = (payload: any): Action => ({
type: ADD_INFORMATION,
payload,
});

export const addBrand = (payload: any): Action => ({
type: ADD_BRAND,
payload,
});

export const setProduct = (payload: any): Action => ({
type: SET_PRODUCT,
payload,
});

export const addSetting = (payload: any): Action => ({
type: ADD_SETTING,
payload,
});

export const setMenu = (payload: any): Action => ({
type: SET_MENU,
payload,
});

export const setBlog = (payload: any): Action => ({
type: SET_BLOG,
payload,
});

export const setGroup = (payload: any): Action => ({
type: SET_GROUP,
payload,
});

export const setSearchHistory = (payload: any): Action => ({
type: SEARCH_HISTORY,
payload,
});

export const setLang = (payload: any): Action => ({
type: SET_LANG,
payload,
});

export const setSlide = (payload: any): Action => ({
type: SET_SLIDE,
payload,
});
