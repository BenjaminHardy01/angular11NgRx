import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  ProductsActions,
  ProductsActionsTypes,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SelectProductAction,
  SelectProductActionSuccess
} from "./products.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects{
  constructor(private productsService:ProductsService, private effectActions:Actions) {
  }

  /* Get all products effects */
  getAllProductsEffect:Observable<ProductsActions>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
    mergeMap((action:ProductsActions)=>{
      return this.productsService.getAllProducts().pipe(
        map((products)=>new GetAllProductsActionSuccess(products)),
        catchError((err)=>of(new GetAllProductsActionError(err)))
      )
    })
  ));

  /* Get selected products effects */
  getSelectedProductsEffect:Observable<ProductsActions>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
    mergeMap((action:ProductsActions)=>{
      return this.productsService.getSelectedProducts().pipe(
        map((products)=>new GetSelectedProductsActionSuccess(products)),
        catchError((err)=>of(new GetSelectedProductsActionError(err)))
      )
    })
  ));

  /* Search products effects */
  searchProductsEffect:Observable<ProductsActions>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
    mergeMap((action:ProductsActions)=>{
      return this.productsService.searchProducts(action.payload).pipe(
        map((products)=>new SearchProductsActionSuccess(products)),
        catchError((err)=>of(new SearchProductsActionError(err)))
      )
    })
  ));

  /* Select product effects */
  selectProductsEffect:Observable<ProductsActions>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.SELECT_PRODUCT),
    mergeMap((action:ProductsActions)=>{
      return this.productsService.setSelected(action.payload).pipe(
        map((product)=>new SelectProductActionSuccess(product)),
        catchError((err)=>of(new SearchProductsActionError(err.message)))
      )
    })
  ));
}
