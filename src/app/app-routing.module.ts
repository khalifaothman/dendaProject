import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { ShowProdADMINComponent } from './show-prod-admin/show-prod-admin.component'
import { PostProductComponent } from './post-product/post-product.component';
import{ProdByImageComponent} from'./prod-by-image/prod-by-image.component';
import{ ShowProductListComponent} from './show-product-list/show-product-list.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'produit',component:ProduitDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminComponent},
  {path:'ProdAdmin',component:ShowProdADMINComponent},
  {path:'PostProduct',component:PostProductComponent},
  {path:'Prodimage',component:ProdByImageComponent},
  {path:'test',component:ShowProductListComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

