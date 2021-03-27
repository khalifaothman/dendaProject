import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../../assets2/css/style.css'
    ]
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
  productList(){
  this.router.navigateByUrl('ProdAdmin');
  }
}
