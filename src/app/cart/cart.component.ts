import { Component, OnInit } from '@angular/core';
import {Prodservice} from '../service/service'
import { Router } from '@angular/router';
import{cart} from '../Model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  affichagecart:cart[];


  constructor(private  ProductService:Prodservice,private router: Router) { }
  

  ngOnInit() {
    let userid=JSON.parse(localStorage.getItem('user')|| '{}');
    this.ProductService.affichercart(userid).toPromise().then(

      data=>{
        this.affichagecart=data;
        console.log(this.affichagecart)

        console.log(data);
        



      },error=>{
       console.log(+error);
    }
  )
 
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
affichercart(id:number){
    this.ProductService.affichercart(id).toPromise().then(

      data=>{ console.log(+data);
        this.affichagecart=data;
        console.log(data);
        return data;




      },error=>{
       console.log(+error);
    }
  )
  

}
}


