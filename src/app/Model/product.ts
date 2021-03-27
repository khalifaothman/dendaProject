import { Category } from './categorie';
import { user } from './User';

export class Product{
    id:number;
    name:String;
    price :number;
    promotion:boolean;
    produithome:boolean;
    pourcenpromotion:number;
    quantity:number;
    dateDeFin:Date;
    datedebutpromotion:Date;
    description:string;
    creationDate:Date;
    categoryID:Category;
    userID:user;
    image:string;
    constructor(ProductResponse:any){
        this.id=ProductResponse.id;
        this.name=ProductResponse.name;
        this.price=ProductResponse.price;
        this.produithome=ProductResponse.produithome;
        this.promotion=ProductResponse.promotion;
        this.pourcenpromotion=ProductResponse.pourcenpromotion;
        this.quantity=ProductResponse.quantity;
        this.dateDeFin=ProductResponse.dateDeFin;
        this.datedebutpromotion=ProductResponse.datedebutpromotion;
        this.description=ProductResponse.description;
        this.creationDate=ProductResponse.creationDate;
        this.categoryID=ProductResponse.categoryID;
        this.userID=ProductResponse.userID;
        this.image=ProductResponse.image;
    }
}