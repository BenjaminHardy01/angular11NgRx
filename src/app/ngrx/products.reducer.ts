import {Product} from "../model/product.model";
import {ProductsActions, ProductsActionsTypes} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  ERROR="Error",
  INITIAL="Initial"
}

export interface ProductsState{
  products:Product[],
  errorMessage: String,
  dataState: ProductsStateEnum
}

const initState: ProductsState = {
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL
}

export function productsReducer(state:ProductsState = initState, action: Action):ProductsState{
   switch (action.type) {
     /* Get all products */
     case ProductsActionsTypes.GET_ALL_PRODUCTS:
       return {...state, dataState:ProductsStateEnum.LOADING}
     case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
       return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
     case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
       return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

     /* Get all products */
     case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
       return {...state, dataState:ProductsStateEnum.LOADING}
     case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
       return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
     case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
       return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

     /* Search products */
     case ProductsActionsTypes.SEARCH_PRODUCTS:
       return {...state, dataState:ProductsStateEnum.LOADING}
     case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
       return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
     case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
       return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

     /* Select product */
     case ProductsActionsTypes.SELECT_PRODUCT:
       return {...state, dataState:ProductsStateEnum.LOADING}
     case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
       let product:Product=(<ProductsActions>action).payload;
       let listProducts=[...state.products];
       let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
       return {...state, dataState:ProductsStateEnum.LOADED, products:data}
     case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
       return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

     default : return {...state}
   }
}
