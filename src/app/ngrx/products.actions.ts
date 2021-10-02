import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductsActionsTypes{
  /* Get all products */
  GET_ALL_PRODUCTS="[Products] Get all products",
  GET_ALL_PRODUCTS_SUCCESS="[Products] Get all products success",
  GET_ALL_PRODUCTS_ERROR="[Products] Get all products error",

  /* Get selected products */
  GET_SELECTED_PRODUCTS="[Products] Get selected products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get selected products success",
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get selected products error",

  /* Search products */
  SEARCH_PRODUCTS="[Products] Search products",
  SEARCH_PRODUCTS_SUCCESS="[Products] Search products success",
  SEARCH_PRODUCTS_ERROR="[Products] Search products error",

  /* Select product */
  SELECT_PRODUCT="[Products] Select product",
  SELECT_PRODUCT_SUCCESS="[Products] Select product success",
  SELECT_PRODUCT_ERROR="[Products] Select product error"
}

/* Get all products actions */
export class GetAllProductsAction implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;

  constructor(public payload:any) {
  }
}

export class GetAllProductsActionSuccess implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;

  constructor(public payload:Product[]) {
  }
}

export class GetAllProductsActionError implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;

  constructor(public payload:String) {
  }
}

/* Get selected products actions */
export class GetSelectedProductsAction implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;

  constructor(public payload:any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;

  constructor(public payload:Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload:String) {
  }
}

/* Search products actions */
export class SearchProductsAction implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS;

  constructor(public payload:String) {
  }
}

export class SearchProductsActionSuccess implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;

  constructor(public payload:Product[]) {
  }
}

export class SearchProductsActionError implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;

  constructor(public payload:String) {
  }
}

/* Select product actions */
export class SelectProductAction implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT;

  constructor(public payload:Product) {
  }
}

export class SelectProductActionSuccess implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;

  constructor(public payload:Product) {
  }
}

export class SelectProductActionError implements Action{
  type : ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:String) {
  }
}

export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError |
  GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError |
  SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError |
  SelectProductAction | SelectProductActionSuccess | SelectProductActionError;
