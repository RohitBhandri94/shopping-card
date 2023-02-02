import { Component, OnInit } from '@angular/core';
import { cardService } from 'src/app/shared/models/services/card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],


})
export class CardComponent implements OnInit {
   

  
 carArr : any;
 
cardList :any [];

amount:any;






  constructor(public cardServ:cardService,
          
    ){
    this.cardList=cardServ.getCardList();

  }

 

  
  
    AddTableData(carArr : any){
   console.log(this.cardList,carArr) ;
 
     }



     ngOnInit(): void {
  
      
     } 

    
 
     
 
    couter(str:string,carArr:any){  
    
     (str==='add' )? carArr.quntity++ : carArr.quntity-- 



    }



    sendData(carArr:any) {
      // send data to subscribers via observable subject
  
     this.cardServ.sendData(carArr);

     
     

    }
 
    clearData():void{
      //clear data
      this.cardServ.clearData();
    
    }

    grandTotal(){
      this.amount=0;
       for(let index of this.cardList){
          this.amount += index.quntity*index.price
       }
      }
}


