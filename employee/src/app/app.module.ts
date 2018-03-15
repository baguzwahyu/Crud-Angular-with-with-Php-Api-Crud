import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './ems/navbar/navbar.component';
import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { EmpService } from './emp.service';
import { ProductService } from './product.service';
import { InsertproductComponent } from './ems/product/insertproduct/insertproduct.component';
import { ShowproductComponent } from './ems/product/showproduct/showproduct.component';
import { EditproductComponent } from './ems/product/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    InsertproductComponent,
    ShowproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmpService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
