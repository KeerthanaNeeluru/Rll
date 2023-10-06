import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componets/cart/cart.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { LoginComponent } from './componets/login/login.component';
import { ProductComponent } from './componets/product/product.component';
import { ResetComponent } from './componets/reset/reset.component';
import { SignupComponent } from './componets/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { BillingComponent } from './componets/billing/billing.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'reset', component: ResetComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  {path:'billing', component: BillingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

 
})
export class AppRoutingModule { }
