import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {Store} from "@ngrx/store";
import {SelectProductAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() product:Product | undefined;

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.store.dispatch(new SelectProductAction(product))
  }
}
