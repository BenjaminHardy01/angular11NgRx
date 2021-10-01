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
  GET_SELECTED_PRODUCTS_ERROR="[Products] Get selected products error"
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

export type ProductsActions =
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError |
  GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError;
