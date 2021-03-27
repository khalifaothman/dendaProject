import { Component, OnInit } from '@angular/core';
import{ProdserviceAdmin} from '../service/serviceProduct';
import { Router } from '@angular/router'
import {Product} from '../Model/product'
import { Category } from '../Model/categorie';
@Component({
  selector: 'app-show-prod-admin',
  templateUrl: './show-prod-admin.component.html',
  styleUrls: ['../../assets2/css/style.css']
})
export class ShowProdADMINComponent implements OnInit {

  constructor(private ProductService: ProdserviceAdmin, private router: Router) { }
  allProduct: Product[];
  allcategory:Category[];
  ngOnInit() {
    
    this.ProductService.afficherProdAdmin().toPromise().then(
      data => {
       this.allProduct=data;

      }, error => {
        console.log(+error);
      })
      this.ProductService.affichercatAdmin().toPromise().then(
        data => {
         this.allcategory=data;
  
        }, error => {
          console.log(+error);
        })

    
  }
  afficherProdAdmin() {

    this.ProductService.afficherProdAdmin().toPromise().then(
      data => {
        console.log(+data);

      }, error => {
        console.log(+error);
      })
  }
  affichercatAdmin() {

    this.ProductService.affichercatAdmin().toPromise().then(
      data => {
        console.log(+data);

      }, error => {
        console.log(+error);
      })
  }


}
