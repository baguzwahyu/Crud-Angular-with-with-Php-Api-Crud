import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { Product } from '../../../product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  model = new Product();
  addProduct(){
    this.productService
    .addProduct(this.model)
    .subscribe(()=> this.goBack());
  }
  goBack() {
    this.router.navigate(['/showProduct']);
  }


}
