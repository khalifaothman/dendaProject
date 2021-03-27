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



  constructor(private ProductService: ProdserviceAdmin) { }

  ngOnInit(): void {
  }
  ajouterProduit(name:String,promotion:boolean,pourcenpromotion:number,quantity:number,dateDeFin:Date,datedebutpromotion:Date,produithome:boolean,categoryID:Category,description:string,userID:user,price:number,image:string,creationDate:Date){
    let id: number=0;
    const dep: Product = {
      id:id,
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
