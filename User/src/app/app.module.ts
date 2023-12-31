import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { FormsModule } from '@angular/forms';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProdEditComponent } from './components/prod-edit/prod-edit.component';
import { ProductUserComponent } from './components/product-user/product-user.component';
import { filter } from 'rxjs';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    UsereditComponent,
    ProductAdminComponent,

    ProdEditComponent,
    ProductUserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
