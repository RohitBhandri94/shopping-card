import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {

  newlyAddProdut: any;
  constructor() { }

  ngOnInit(): void {
  }
  catchEventFormChildList(eve:any){
    this.newlyAddProdut= eve;
  }

}
