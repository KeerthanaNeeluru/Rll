import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductUserComponent } from './components/product-user/product-user.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';

const routes: Routes = [
  {path:"product-user", component: ProductUserComponent},
  {path:"product-admin", component: ProductAdminComponent},
  {path:"user-details", component: UserDisplayComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
