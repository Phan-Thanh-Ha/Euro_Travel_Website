"use client";

import {
  ADD_BRAND,
  ADD_INFORMATION,
  ADD_PRODUCT,
  ADD_SETTING,
  REMOVE_PRODUCT,
  RESET_CART,
  SEARCH_HISTORY,
  SET_BLOG,
  SET_GROUP,
  SET_LANG,
  SET_MENU,
  SET_PRODUCT,
  SET_SLIDE,
} from "@/store/contants";

export const initState = {
  cart: [],
  information: {},
  brand: [],
  product: [],
  setting: {},
  blog: [],
  group: [],
  search: [],
  lang: "vi",
  slide: [],
  menu: [],
};

const addProductToCart = (product: any, state: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item: any) => item.ProductId === product.ProductId
  );

  if (updatedItemIndex < 0) {
    product?.quantityPlus
      ? updatedCart.push({ ...product, quantity: product.quantityPlus })
      : updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    if (product?.quantityChange) {
      updatedItem.quantity = product.quantityChange;
    } else if (product?.quantityPlus) {
      updatedItem.quantity = updatedItem.quantity + product.quantityPlus;
    } else {
      updatedItem.quantity++;
    }
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (product: any, state: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.ProductId === product.ProductId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

interface State {
  cart: any[];
  information: any;
  brand: any[];
  product: any[];
  setting: any;
  blog: any[];
  group: any[];
  search: any[];
  lang: string;
  slide: any[];
  menu: any[];
}

interface Action {
  type: string;
  payload: any;
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.payload, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.payload, state);
    case ADD_INFORMATION: {
      return {
        ...state,
        information: action.payload,
      };
    }
    case ADD_BRAND: {
      return {
        ...state,
        brand: action.payload,
      };
    }
    case RESET_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    case SET_PRODUCT: {
      return {
        ...state,
        product: action.payload,
      };
    }
    case ADD_SETTING:
      return {
        ...state,
        setting: action.payload,
      };
    case SET_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    case SET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case SET_GROUP:
      return {
        ...state,
        group: action.payload,
      };
    case SEARCH_HISTORY:
      return {
        ...state,
        search: action.payload,
      };
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SET_SLIDE:
      return {
        ...state,
        slide: action.payload,
      };
    default:
      return state;
  }
};
