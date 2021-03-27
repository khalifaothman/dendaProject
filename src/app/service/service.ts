import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../Model/categorie';
import { Product } from '../Model/product';
import { souscategorie } from '../Model/souscategorie';
import { user } from '../Model/User';
import { cart } from '../Model/cart'
@Injectable({
  providedIn: 'root'
})
export class Prodservice {
  constructor(private _http: HttpClient) { }

  affichercategory() {
    return this._http.get<Category[]>("http://localhost:8081/SpringMVC/servlet/getallcat")
  }
  affichercategoryHome() {
    return this._http.get<Category[]>("http://localhost:8081/SpringMVC/servlet/getCatByAcceuil");
  }
  afficherSousCategory(id: number) {
    return this._http.get<souscategorie[]>("http://localhost:8081/SpringMVC/servlet/getSousCategory/" + id);
  }
  afficherProduitPromotion() {
    return this._http.get<Product[]>("http://localhost:8081/SpringMVC/servlet/promotion");
  }
  login(username: string, password: string) {
    return this._http.get<user>("http://localhost:8081/SpringMVC/servlet/ajout/" + username + "/" + password);
  }
  ajoutercart(idprod: number, iduser: number) {
    return this._http.put("http://localhost:8081/SpringMVC/servlet/ajoutercart/" + idprod + "/" + iduser, { responseType: 'text' });
  }
  affichercart(id: number) {
    return this._http.get<cart[]>("http://localhost:8081/SpringMVC/servlet/getcartByUser/" + id);
  }
  afficherProdByCatHome(id: number) {
    return this._http.get<Product[]>("http://localhost:8081/SpringMVC/servlet/afficherProdByCatHome/" + id);
  }
  getcategoriehomeid() {
    return this._http.get<number[]>("http://localhost:8081/SpringMVC/servlet/getcategoriehomeid");
  }




}