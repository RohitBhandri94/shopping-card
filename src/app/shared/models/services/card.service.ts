
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ProdctCard } from "../card.model"

@Injectable({providedIn:'root'})


export class cardService{




   private cardList = [
        new ProdctCard(
            'Rice',
            'India Gate',
            'https://www.media4growth.com/public/thumbs/news/2020/06/5044/India_gate_thumnail_440_851.jpg',
            1,
           120,
          ),
          new ProdctCard(
            'Chili',
            'MDH',
            'https://www.javatpoint.com/fullformpages/images/mdh.png',
            1,
            20,
          ),
          new ProdctCard(
            'Sugar',
            'Madhur',
            'https://www.madhursugar.com/assets/images/madhur-sugar-green-pack.png',
            1,
            100,
          ),
    ];


private subject = new Subject<any>();


    getCardList(){
        return this.cardList.slice()
    };

    catchPorductListFromProdctService(ProdctCard:any){
        console.log('this is from card serv',ProdctCard);
      
        this.cardList.push(...ProdctCard);
    }

    sendData(data:any){
      console.log(data)
      this.subject.next(data);
    }

  clearData(){
    this.subject.next('');
  }

  getData():Observable<any>{
    return this.subject.asObservable()
  }
}