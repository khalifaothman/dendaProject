import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product-list',
  templateUrl: './show-product-list.component.html',
  styleUrls: ['./show-product-list.component.css']
})
export class ShowProductListComponent implements OnInit {
 head='head';
  headStyles=[
  '	./assets/src/plugins/datatables/css/dataTables.bootstrap4.min.css',
    './assets/src/plugins/datatables/css/responsive.bootstrap4.min.css'];

  body='body';
  bodyScripts=[

    './assets/src/plugins/datatables/js/jquery.dataTables.min.js',
      './assets/src/plugins/datatables/js/dataTables.bootstrap4.min.js',
      './assets/src/plugins/datatables/js/dataTables.responsive.min.js',
    './assets/src/plugins/datatables/js/responsive.bootstrap4.min.js',
      './assets/src/plugins/datatables/js/dataTables.buttons.min.js',
    './assets/src/plugins/datatables/js/buttons.bootstrap4.min.js',
    './assets/src/plugins/datatables/js/buttons.print.min.js',
    './assets/src/plugins/datatables/js/buttons.html5.min.js',
    './assets/src/plugins/datatables/js/buttons.flash.min.js',
    './assets/src/plugins/datatables/js/pdfmake.min.js',
    './assets/src/plugins/datatables/js/vfs_fonts.js',
    './assets/vendors/scripts/datatable-setting.js'];
  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('listenseg-page');
    this.loadStyles(this.head,this.headStyles);
    this.loadScripts(this.body,this.bodyScripts);
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
