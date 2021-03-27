import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import{CommonModule} from '@angular/common';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowProdADMINComponent } from './show-prod-admin/show-prod-admin.component';
import { PostProductComponent } from './post-product/post-product.component'
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowProductListComponent } from './show-product-list/show-product-list.component';
import { RouterModule } from '@angular/router';
  


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitDetailsComponent,
    LoginComponent,
    CartComponent,
    AdminComponent,
    ShowProdADMINComponent,
    PostProductComponent,
    ShowProductListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule ,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
