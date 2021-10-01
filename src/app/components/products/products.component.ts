import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductsState, ProductsStateEnum} from "../../ngrx/products.reducer";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsState$: Observable<ProductsState> | undefined;
  readonly ProductsStateEnum=ProductsStateEnum;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
      this.productsState$=this.store.pipe(
        map((state)=> state.catalogState)
      )
  }

}
