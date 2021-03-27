import { user } from '../Model/User';
import { Product } from '../Model/product';
export class cart{
    id:number;
    quantity:number;
    prod:Product;
    user:user;
    constructor(CartResponse:any){
        this.id=CartResponse.id;
        this.quantity=CartResponse.quantity;
        this.prod=CartResponse.Product;
        this.user=CartResponse.user
    }
}