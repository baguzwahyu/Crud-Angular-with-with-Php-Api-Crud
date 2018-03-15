import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { InsertproductComponent } from './ems/product/insertproduct/insertproduct.component';
import { ShowproductComponent } from './ems/product/showproduct/showproduct.component';
import { EditproductComponent } from './ems/product/editproduct/editproduct.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent},

  {path: "insertProduct", component: InsertproductComponent},
  {path: "showProduct", component: ShowproductComponent},
  {path: "editProduct/:id", component: EditproductComponent },
  {path: "insertProduct", component: InsertproductComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
