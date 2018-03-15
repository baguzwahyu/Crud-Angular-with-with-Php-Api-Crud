import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  product = [];

  constructor(private _http:Http) 
  {

  }

  checkMe: any;

  addProduct(info) {
    return this._http.post("http://localhost/api/product/insert.php", info)
      .map(() => "");
  }

  getProducts() {
    return this._http.get("http://localhost/api/product/select.php/")
      .map(res => {
        this.checkMe = res;

        if (this.checkMe._body !== "0") {
          return res.json()
        }
      });
  }

  deleteProduct(id){
    return this._http.post("http://localhost/api/product/delete.php/",{ 'id': id })
      .map(() => this.getProducts());
  }


  getProduct(id) {
    return this._http.post("http://localhost/api/product/selectone.php/", { 'id': id })
      .map(res => res.json());
  }

  updateProduct(info){
    return this._http.post("http://localhost/api/product/update.php/", info)
    .map(()=>"");
  }



}
