import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess, GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  ProductsActionsTypes
} from "./products.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects{
  constructor(private productsService:ProductsService, private effectActions:Actions) {
  }

  /* Get all products */
  getAllProductsEffect:Observable<Action>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
    mergeMap((action)=>{
      return this.productsService.getAllProducts().pipe(
        map((products)=>new GetAllProductsActionSuccess(products)),
        catchError((err)=>of(new GetAllProductsActionError(err)))
      )
    })
  ));

  /* Get selected products */
  getSelectedProductsEffect:Observable<Action>=createEffect(()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
    mergeMap((action)=>{
      return this.productsService.getSelectedProducts().pipe(
        map((products)=>new GetSelectedProductsActionSuccess(products)),
        catchError((err)=>of(new GetSelectedProductsActionError(err)))
      )
    })
  ));
}
