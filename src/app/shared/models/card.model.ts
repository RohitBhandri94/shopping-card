


export class ProdctCard{
    name : string;
    brand:string;
    imgData:string;
    quntity:number;
    price :number;


    constructor(pName :string,pBrand:string,pImg:string,pQty:number,prices:number,){
        this.name = pName;
        this.brand=pBrand;
        this.imgData=pImg;
        this.quntity=pQty;
        this.price=prices;
    }
}