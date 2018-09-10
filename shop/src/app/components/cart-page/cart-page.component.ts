import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.sass']
})
export class CartPageComponent implements OnInit {
  public test2 = 1;
  constructor(private cs: CartService) { }

  ngOnInit() {
  }

  public changeTest2() {
    this.test2 = 5;
  }

  public remove(index) {
    this.cs.removeByIndex(index);
  }

  get items() {
    return this.cs.list;
  }

  get total() {
    return this.cs.total;
  }

  public test(count) {
    console.log('Change count:', count);
  }

}
