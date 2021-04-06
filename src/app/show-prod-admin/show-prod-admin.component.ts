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
  head='head';
  headerStyles=[
'./assets/vendor/datatables/css/dataTables.bootstrap4.css',
    './assets/vendor/datatables/css/buttons.bootstrap4.css',
'./assets/vendor/datatables/css/select.bootstrap4.css',
    './assets/vendor/datatables/css/fixedHeader.bootstrap4.css',
   './assets/vendor/bootstrap/css/bootstrap.min.css',
   './assets/vendor/fonts/circular-std/style.css',
    './assets/libs/css/style.css',
   './assets/vendor/fonts/fontawesome/css/fontawesome-all.css'

  ];
  body='body';
  bodyScripts=[
    'https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js',
'./assets/vendor/datatables/js/dataTables.bootstrap4.min.js',
   'https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js',
    './assets/vendor/datatables/js/buttons.bootstrap4.min.js',
    './assets/vendor/datatables/js/data-table.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js',
   'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js',
    'https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js',
   'https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js',
    'https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js',
   'https://cdn.datatables.net/rowgroup/1.0.4/js/dataTables.rowGroup.min.js',
    'https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js',
    'https://cdn.datatables.net/fixedheader/3.1.5/js/dataTables.fixedHeader.min.js',
   './assets/vendor/jquery/jquery-3.3.1.min.js',
    './assets/vendor/bootstrap/js/bootstrap.bundle.js',
    './assets/vendor/slimscroll/jquery.slimscroll.js',
    './assets/vendor/multi-select/js/jquery.multi-select.js',
    './assets/libs/js/main-js.js'

  ];

  constructor(private ProductService: ProdserviceAdmin, private router: Router) { }
  allProduct: Product[];
  allcategory:Category[];
  ngOnInit():void {
 document.body.classList.add('admine-page');
 this.loadScripts(this.body,this.bodyScripts);
 this.loadStyles(this.head,this.headerStyles);
    
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
  loadScripts(a:any,b:any) {
    for (let i = 0; i < b.length; i++) {
    const script= document.createElement('script');
    script.src= b[i];
    script.type= 'text/javascript';
    script.async= false;
    document.getElementsByTagName(a)[0].appendChild(script);
    }}


    loadStyles(a:any,b:any) {
    for (let i = 0; i < b.length; i++) {
    const style= document.createElement('link');
    style.href = b[i];
    style.type = 'text/css';
    style.rel = 'stylesheet';
    document.getElementsByTagName(a)[0].appendChild(style);
    }}


}
