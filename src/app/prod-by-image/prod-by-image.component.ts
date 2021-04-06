import { Component, OnInit } from '@angular/core';
import{ProdserviceAdmin} from '../service/serviceProduct';
import { Router } from '@angular/router'
import {Product} from '../Model/product'
@Component({
  selector: 'app-prod-by-image',
  templateUrl: './prod-by-image.component.html',
  styleUrls: ['./prod-by-image.component.css']
})
export class ProdByImageComponent implements OnInit {

  constructor(private ProductService: ProdserviceAdmin, private router: Router) { }
  allProduct: Product[];

  ngOnInit() {
    
    this.ProductService.afficherProdAdmin().toPromise().then(
      data => {
       this.allProduct=data;

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
