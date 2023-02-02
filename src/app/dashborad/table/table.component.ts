import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { cardService } from 'src/app/shared/models/services/card.service';
 import { ProdctCard } from 'src/app/shared/models/card.model'  

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

  export class TableComponent implements OnInit,OnDestroy {

    data : any[]=[];
    subscription :Subscription

  cardList: any = [] ;

  amount:any;






   

 
 

  



  constructor(private cardServ: cardService,
              
    ) {
   console.log(this.cardList = this.cardServ.getCardList()) ;

   
    this.subscription =this.cardServ.getData().subscribe(res =>{
      if(res){
        console.log(res)
        this.data.push(res);
      }else{
        // clear data when empty data recived 
        this.data=[];
      }
    })

  }


  ngOnInit(): void {

console.log(this.cardList);

  }



  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
 

grandTotal(){
this.amount=0;
 for(let index of this.cardList){
    this.amount += index.quntity*index.price
 }
}









}
