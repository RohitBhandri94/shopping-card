import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

   @ViewChild('myProName')pName : any;
   @ViewChild('myProBrand')pBrand : any;
   @ViewChild('myProImg')PImg : any;
   @ViewChild('myProQty')iQty : any;
   @ViewChild('myProPrice')iPrice : any;

  constructor() { }

  @ViewChild('myForm') myFormObj :NgForm |any;

  @Output('sendProductToParentMain') proEmitter = new EventEmitter();

  ngOnInit(): void {
  }
  
  addProduct(){
   const newProd = new Product(
    this.pName.nativeElement.value,
    this.pBrand.nativeElement.value,
   + this.iQty.nativeElement.value,
    +this.iPrice.nativeElement.value,
    this.PImg.nativeElement.value,
    ) 
  //  console.log(newProd);
  this.proEmitter.emit(newProd);
  }

  onSubmitt(){
    console.log('form submitted',this.myFormObj)
  }
 
}
