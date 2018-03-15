import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { Product } from '../../../product';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  constructor(
    private _productService:ProductService,
    private router: Router
  ) { }
products:any;
  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this._productService
      .getProducts()
      .subscribe(products =>{
        this.products = products;
      })
  }

  deleteProduct(id){
    this._productService
      .deleteProduct(id)
      .subscribe(() => {
        this.getProduct();
      })
  }




}
