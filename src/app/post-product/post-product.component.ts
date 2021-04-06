import { Component, OnInit } from '@angular/core';
import { Category } from '../Model/categorie';
import { Product } from '../Model/product';
import { user } from '../Model/User';
import { ProdserviceAdmin } from '../service/serviceProduct'
@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['../../assets2/css/style.css'
    ]
 
})

export class PostProductComponent implements OnInit {

  promotion:any;
  produithome:any;

  constructor(private ProductService: ProdserviceAdmin) { }

  ngOnInit(): void {
  }
  ajouterProduit(name:String,pourcenpromotion:String,quantity:String,dateDeFin:String,datedebutpromotion:any,produithome:boolean,categoryID:any,description:string,userID:any,price:any,image:string,creationDate:any){
    let id: number=0;
    console.log(this.promotion);
    const dep: Product = {
      id:id,
      name: name,
      promotion: true,
      produithome:true,
      pourcenpromotion: Number(pourcenpromotion),
      quantity: Number(quantity),
      dateDeFin:new Date(Date.parse(Date())),
      datedebutpromotion:datedebutpromotion,
      categoryID:categoryID,
      description:description,
      userID:userID,
      price:price,
      image:image,
      creationDate:creationDate
     


    };
    


    this.ProductService.ajouterProduct(dep.name,dep.promotion,dep.pourcenpromotion,dep.quantity,dep.dateDeFin,dep.datedebutpromotion,dep.produithome,dep.categoryID,dep.description,dep.userID,dep.price,dep.image,dep.creationDate).subscribe((res:any)=> {
      console.log(res);
      window.alert("produit enregistre");
          location.reload();
        },
        error => {
          alert("erreur");
        }
    );
  }
    
}
