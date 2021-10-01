import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() product:Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
