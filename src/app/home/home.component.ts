import { Component, NgModuleFactoryLoader, OnInit } from '@angular/core';
import { Category } from '../Model/categorie';
import { Product } from '../Model/product';
import { souscategorie } from '../Model/souscategorie';
import { Prodservice } from '../service/service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  affichageCategorie: Category[];
  afficherCat: Category[];
  afficheSousCat: souscategorie[];
  promotionproduct: Product[];
  products: any[];

  ids: number[]
  constructor(private ProductService: Prodservice, private router: Router) {

  }


  ngOnInit() {

    this.products = [];

    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

    this.afficherProduitPromotion();
    this.getAllCategories();
    this.getAllSideCategories();


  }

  afficherProduitPromotion() {
    this.ProductService.afficherProduitPromotion().toPromise().then(

      data => {
        this.promotionproduct = data;
        return data;
      }, error => {
        console.log(+error);
      })

    return this.promotionproduct;
  }

  getAllCategories(): Category[] {
    this.ProductService.affichercategoryHome().toPromise().then(

      data => {
        this.afficherCat = data;
        this.afficherCat.forEach(element => {
          this.afficherProdByCatHome(element.id);
        });
        return data;
      }, error => {
        console.log(+error);
      })

    return this.afficherCat;


  }

  getAllSideCategories(): Category[] {
    this.ProductService.affichercategory().toPromise().then(

      data => {
        this.affichageCategorie = data;
        return data;
      }, error => {
        console.log(+error);
      })

    return this.affichageCategorie;
  }


  afficherProd() {

    this.ProductService.affichercategory().toPromise().then(
      data => {
        console.log(+data);

      }, error => {
        console.log(+error);
      })
  }
  afficherSousCategorie(id: number) {
    this.ProductService.afficherSousCategory(id).toPromise().then(
      data => {
        console.log(data);
        this.afficheSousCat = data;
        console.log("test");
        return data;


      }, error => {
        console.log(+error);
        return null;

      })
  }
  gotodetaillproduit(id: number) {
    console.log("clicked" + id)
    localStorage.setItem('dataSource', '' + id);
    this.router.navigate(['/produit']).then(() => {
      window.location.reload();
    });
  }
  CheckConnect() {
    if (localStorage.getItem("user") === null) {
      this.router.navigate(['/login'])
    } else
      this.router.navigate(['/cart'])
  }


  afficherProdByCatHome(id: number): any[] {
    this.ProductService.afficherProdByCatHome(id).toPromise().then(

      data => {
        this.products.push(data);
        return data;
      }, error => {
        console.log(+error);
      })
    console.log("products", this.products)
    return this.products;
  }




}

