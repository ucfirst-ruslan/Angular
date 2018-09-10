import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  public list: Product[] = [];
  constructor(private http?: HttpClient) {
    /* this.list = [
      {id: 1, name: 'Product 1', price: 21},
      {id: 3, name: 'Product 2', price: 10},
      {id: 5, name: 'Product 3', price: 10.5},
      {id: 138, name: 'Product 4', price: 1},
      {id: 150, name: 'Product 5', price: 3}
    ]; */
    this.getProducts().subscribe(data => {
      this.list = data;
    });
  }

  public getProductById(id) {
    return this.list.find(item => item.id === id);
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://www.mocky.io/v2/5b8e902d320000fb197b3a14');
  }

}
