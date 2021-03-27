import { Component, OnInit } from '@angular/core';
import {Prodservice} from '../service/service'
import { Router } from '@angular/router';
import { user} from '../Model/User'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:user;

  constructor(private  ProductService:Prodservice,private router: Router) { }

  ngOnInit(): void {
  }

login(username:string,password:string){
  this.ProductService.login(username,password).subscribe((data=> {
    if(data==null){
      console.log("erreur password pleaz try again");
    }else{
      this.users=data


      localStorage.setItem('user',''+this.users.id);
      this.router.navigate(['/produit']).then(() => {
        window.location.reload();
      });;
    
    }
    
    
    
  }))

}



}
