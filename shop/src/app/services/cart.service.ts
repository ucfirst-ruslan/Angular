import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';

class CartItem {
  constructor(public id: number =  0, public count: number = 0, private products: ProductsService) {}

  get total() {
    return this.count * this.product.price;
  }

  get price() {
    return this.product.price;
  }

  public get product() {
    return this.products.getProductById(this.id) || {price: 0};
  }
}

@Injectable()
export class CartService {
  private items = [];
  constructor(protected products: ProductsService) {
    this.loadCart();
  }

  public loadCart() {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  public saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items || []));
  }

  public add(id) {
    const product = this.findProduct(id);
    if (void 0 === product) {
      this.initProduct(id);
    } else {
      product.count++;
    }
    this.saveCart();
  }

  public findProduct(id) {
    return this.items.find((item) => item.id === id);
  }

  public changeCount(id, count) {
    this.findProduct(id).count = count;
    this.saveCart();
  }

  public initProduct( id ) {
    this.items.push({id, count: 1});
    this.saveCart();
  }

  public removeByIndex(index) {
    this.items.splice(index, 1);
    this.saveCart();
  }

  get totalItems() {
    return this.items.reduce((total, item) => total + item.count, 0);
  }

  get total() {
    return this.list.reduce((total, item) => {
      const product = this.products.getProductById(item.id);
      if (void 0 !== product) {
        total += (product.price * item.count);
      }
      return total;
    }, 0);
  }

  get list() {
    return this.items.filter((item) => void 0 !== this.products.getProductById(item.id));
  }
}
