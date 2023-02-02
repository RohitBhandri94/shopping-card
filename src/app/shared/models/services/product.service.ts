import { Injectable } from "@angular/core";
import { Product } from "../product.model";
import { cardService } from "./card.service";

@Injectable()

export class productService{
    private productList =[
        new Product('Oil','Gemini',15,2500,'https://www.bigbasket.com/media/uploads/p/l/274132-9_1-gemini-sunflower-oil-with-nutri-fresh-technology.jpg'),
        new Product('Salt','Tata',1,40,'https://m.media-amazon.com/images/I/61aoHG0V6AL._SX425_.jpg'),
      ];
    
 

constructor(private cardServe : cardService ){}
      getProductList(){
        return this.productList.slice();
      };

      catchProductListFromProductItem(ProdctCard:any){
        // console.log(productList)
        this.cardServe.catchPorductListFromProdctService(ProdctCard)
      }

 
}