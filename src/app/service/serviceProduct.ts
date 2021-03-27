import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../Model/product';
import { Category } from '../Model/categorie';
import { user } from '../Model/User';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
  export class ProdserviceAdmin {
    constructor(private _http: HttpClient) { }
  
    afficherProdAdmin() {
      return this._http.get<Product[]>("http://localhost:8081/SpringMVC/servlet/getallProd")
    }
    affichercatAdmin() {
      return this._http.get<Category[]>("http://localhost:8081/SpringMVC/servlet/getallcat")
    }
    ajouterProduct(name:String,promotion:boolean,pourcenpromotion:number,quantity:number,dateDeFin:Date,datedebutpromotion:Date,produithome:boolean,categoryID:Category,description:string,userID:user,price:number,image:string,creationDate:Date){
      let contentBody = JSON.stringify({
        name: name,
        promotion: promotion,
        produithome:produithome,
        pourcenpromotion: pourcenpromotion,
        quantity: quantity,
        dateDeFin: dateDeFin,
        datedebutpromotion:datedebutpromotion,
        categoryID:categoryID,
        description:description,
        userID:userID,
        price:price,
        image:image,
        creationDate:creationDate
      });
      return this._http.put("http://localhost:8081/SpringMVC/servlet/ajout",contentBody).pipe(map(res => res));

    }
  
  }
    