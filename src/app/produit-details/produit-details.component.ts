import { Component, OnInit } from '@angular/core';
import {Prodservice} from '../service/service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

  constructor(private  ProductService:Prodservice,private router: Router) { }

  ngOnInit(): void {
   
    console.log(localStorage.getItem('dataSource'));
    
    
  }
  ajoutercart(){
    let prodid=JSON.parse(localStorage.getItem('dataSource')|| '{}');
    let userid=JSON.parse(localStorage.getItem('user')|| '{}');
    this.ProductService.ajoutercart(prodid,userid).toPromise().then(
      data=>{ console.log(+data);
  
      },error=>{
       console.log(+error);
    }
  )
  
  }


}
