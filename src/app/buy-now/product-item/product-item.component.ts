import { Component, Input, OnInit } from '@angular/core';
import { productService } from 'src/app/shared/models/services/product.service';
import { Product } from '../../shared/models/product.model';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [
    productService
  ]
})
export class ProductItemComponent implements OnInit {
  pro: any;

  constructor(
    private productServ: productService,
  ) { this.productList = this.productServ.getProductList() }

  ngOnInit(): void {
  }

  productList: Product[] | any



  @Input('getNewProdctFromParentMain') set productSetter(val: any) {
    // console.log("look here ==>>",val)
    if (val) {
      this.productList.push(val);
    }
  }

  sendCardList() {
    console.log(this.productList);
    this.productServ.catchProductListFromProductItem(this.productList);

  }



}
